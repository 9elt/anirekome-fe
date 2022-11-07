import { useState } from "react"
import { useRouter } from "next/router";

//  global state
import { userState } from "../../../global-state/user";
import { useRecoilState } from 'recoil';

import getRecommendationsApi from "../../../api/get-recomendations";

export default function useFormState() {

  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  const initialState: {
    values: { [key: string]: string | number },
    errors: { [key: string]: string },
    submitting: boolean,
  } = {
    values: {
      alphaKey: '',
      userName: '',
      ptw: 0,
      policies: 0,
    },
    errors: {
      alphaKey: '',
      userName: '',
      ptw: '',
      policies: '',
    },
    submitting: false,
  }

  const [formState, setFormState] = useState(initialState);

  const setError = (errors: Array<{ name: string, msg?: string }>) => {

    const update = {
      ...formState,
    }

    for (const i in errors) {
      const err = errors[i];
      if (!(err.name in formState.values)) continue;
      update.errors[err.name] = err.msg || 'error'
    }

    setFormState({ ...formState, ...update })
  }

  const setStatus = (status: boolean) => {
    setFormState({ ...formState, submitting: status });
  }

  const handleChange = (e: any) => {

    const name = e.target.name;
    const checkbox = name == 'ptw' || name == 'policies';
    const value = checkbox ? e.target.checked ? 1 : 0 : e.target.value;

    if (!(name in formState.values)) return;

    const update = {
      values: {
        ...formState.values,
        [name]: value
      },
      errors: {
        ...formState.errors,
        [name]: ''
      }
    }

    setFormState({ ...formState, ...update })
  }

  const handleSubmit = async (e: any) => {

    if (formState.submitting) return;

    e.preventDefault();

    const errors = [];
    if (formState.values.policies == 0) errors.push({ name: 'policies' });
    if (formState.values.userName == '') errors.push({ name: 'userName' });
    if (formState.values.alphaKey == '') errors.push({ name: 'alphaKey' });
    if (errors.length > 0) return setError(errors);

    setStatus(true);

    const res = await getRecommendationsApi(formState.values);
    setUser(res as any);

    router.push('/recommendations');
  }

  return {
    values: formState.values,
    errors: formState.errors,
    submitting: formState.submitting,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    setStatus: setStatus,
  }
}
