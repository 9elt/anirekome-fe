import TextSection from '../components/text-section/text-section'

export default function PrivacyPolicy() {

  return (
    <TextSection>

      <h2>PRIVACY POLICY (effective date 4/4/2022)</h2>
      <h3>1 - USER&apos;S COLLECTED INFORMATION</h3>
      <p>
        anirekome collects the following information:
      </p>
      <ul>
        <li>user&apos;s myanimelist.net username</li>
        <li>user&apos;s myanimelist.net animelist</li>
      </ul>
      <p>
        anirekome <b>does NOT use trackers</b>, therefore user&apos;s information such as location,
        browsing history etc. will NOT be collect
      </p>
      <p>
        In compliance with the myanimelist.net &ldquo;API License and Developer Agreement&ldquo; anirekome does NOT collect
        nor store any sensitive information about its users (user credentials, emails, phone numbers, etc).
      </p>
      <h3>2 - USER&apos;S STORED INFORMATION</h3>
      <p>
        anirekome permanently stores the following information:
        <ul>
          <li>user&apos;s myanimelist.net username (to prevent animelist duplicates)</li>
          <li>user&apos;s myanimelist.net animelist</li>
          <li>user&apos;s recommendation model created by anirekome</li>
        </ul>
        anirekome temporarily stores (in database sessions) the following information:
        <ul>
          <li>user&apos;s preferences (include, or not, plan to watch to recommendations)</li>
          <li>user&apos;s recommendations</li>
          <li>user&apos;s deleted recommendations</li>
        </ul>
        anirekome ONLY stores PUBLICLY available information,
        if your myanimelist.net animelist is set to PRIVATE
        anirekome will NOT store any of the information listed above.
      </p>
      <h3>3 - USE OF THE USER&apos;S INFORMATION</h3>

      <p>
        In compliance with the myanimelist.net &ldquo;API License and Developer Agreement&ldquo;,
        anirekome will NOT sell or make available to third parties any of the information collected
        or stored.
      </p>

      <p>
        Note that by using anirekome you AGREE the previously listed information (points 1 and 2)
        to be collected and/or stored for the ONLY purpose of making anirekome able to deliver and improve its services.
      </p>

    </TextSection>
  )
}