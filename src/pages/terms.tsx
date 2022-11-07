import TextSection from '../components/text-section/text-section'
import NeonLink from '../components/buttons/neon-link'

export default function TermsOfService() {

  return (
    <TextSection>

      <h2>TERMS OF SERVICE (effective date 4/4/2022)</h2>
      <p>By using anirekome (anirekome.com) You accept these terms and conditions in full, if you disagree with these terms
        and conditions or any part of these terms and contitions You must not use anirekome.
      </p>
      <h3>1 - PRIVACY POLICY AGREEMENT</h3>
      <p>
        By using anirekome services you agree to the anirekome
        <NeonLink href='/privacy' color='white'>privacy policy</NeonLink>
      </p>
      <h3>2 - PROPER OR EXPECTED USAGE</h3>
      <p>
        You shall use anirekome in conformity to its general purpose of use:
      </p>
      <ul>
        <li>use the provided user interface at anirekome.com</li>
        <li>get anime recommendations based on Your animelist</li>
        <li>save or delete Your anime recommendations</li>
      </ul>
      <h3>3 - PROHIBITED USES AND RESPONSABILITIES</h3>
      <p>
        You AGREE to NOT connect using other users information,
        to NOT input other users information, or in any way to NOT to use anirekome
        with other users information.
      </p>

      <p>
        You AGREE to NOT cause any damage or right violation to other
        individuals, people or entities using anirekome, in any way, shape or form.
      </p>

      <p>
        You AGREE to NOT cause unneccessary burden on anirekome servers by posting requests
        using bots or scripts of any kind, or by not using anirekome properly (point 2)
      </p>
      <h3>4 - NSFW</h3>
      <p>
        anirekome algorithm will ONLY recommend nsfw in the case that nsfw represents the 0.51% or more
        of the user myanimelist.net animelist ( anime that have &ldquo;dropped&ldquo; status are not included in the % calculation).
      </p>
      <h3>5 - TERMS UPDATES</h3>
      <p>
        As of effective date anirekome is available in an alpha testing version 0.2, terms of service, as
        well as privacy policy terms might be updated as new functionality is added in future versions of anirekome.
      </p>

    </TextSection>
  )
}