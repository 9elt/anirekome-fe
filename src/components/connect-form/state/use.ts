import { useState } from "react"
import { useRouter } from "next/router";

//  global state
import { userState } from "../../../global-state/user";
import { useRecoilState } from 'recoil';

// api
import getRecommendationsApi from "../../../api/recommendations/get-recomendations";
import { ApiError } from "../../../api/recommendations/get-recomendations";
import type { formErrors, formStateType } from "./types";

export default function useFormState() {

  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  const init: formStateType = {
    values: {
      user_name: '',
      policies: 0,
    },
    errors: {
      user_name: '',
      policies: '',
    },
    submitting: false,
  }

  const [state, setState] = useState(init);

  const setError = (errors: Array<{ name: string, msg?: string }>) => {

    const update = state;

    errors.forEach(err => {
      err.name in state.values
        ? update.errors[err.name as keyof formErrors] = err.msg || 'error'
        : 0
    });

    setState({ ...state, ...update })
  }

  const setStatus = (status: boolean) => {
    setState({ ...state, submitting: status });
  }

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = name == 'policies' ? e.target.checked ? 1 : 0 : e.target.value;

    if (!(name in state.values)) return;

    const update = {
      values: {
        ...state.values,
        [name]: value
      },
      errors: {
        ...state.errors,
        [name]: ''
      }
    }

    setState({ ...state, ...update })
  }

  const handleSubmit = async (e: any) => {

    e.preventDefault();
    if (state.submitting) return;

    const errors = [];
    if (state.values.policies == 0) errors.push({ name: 'policies' });
    if (state.values.user_name == '') errors.push({ name: 'user_name' });
    if (errors.length > 0) return setError(errors);

    setStatus(true);

    try {
      const res = await getRecommendationsApi(state.values);

      setUser({
        user_name: state.values.user_name,
        recommendations: res,
      });

      // router.push('/recommendations');

    } catch (e) {

      e instanceof ApiError
        ? setError([{ name: 'user_name', msg: e.msg }])
        : console.log(e);

    }
  }

  return {
    values: state.values,
    errors: state.errors,
    submitting: state.submitting,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    setStatus: setStatus,
  }
}