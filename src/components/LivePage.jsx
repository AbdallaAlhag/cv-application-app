import "../styles/LivePage.css";

function LivePage({ data }) {
  return (
    <>
      <div className="LivePage" id="content">
        <div className="personal-info">
          {data.personal.fullName && <h1>{data.personal.fullName}</h1>}
          {data.personal.jobTitle && <p>{data.personal.jobTitle}</p>}
          <div className="row">
            {data.personal.address && <p>{data.personal.address}</p>}
            {data.personal.phoneNumber && <p>{data.personal.phoneNumber}</p>}
          </div>
        </div>

        <div className="link-info">
          {/* <h2>Link Data</h2> */}
          {data.personal.email && (
            <p>
              <a
                href={data.personal.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.personal.email}
              </a>
            </p>
          )}
          {data.link.website && data.link.websiteText && (
            <p>
              <a
                href={data.link.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.link.websiteText}
              </a>
            </p>
          )}
          {data.link.linkedin && data.link.linkedinText && (
            <p>
              <a
                href={data.link.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.link.linkedinText}
              </a>
            </p>
          )}
          {data.link.github && data.link.githubText && (
            <p>
              <a
                href={data.link.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.link.githubText}
              </a>
            </p>
          )}
        </div>

        {data.personal.summary && <p> {data.personal.summary}</p>}

        <div className="title">
          <h3>Education</h3>
        </div>

        <div className="degree-info">
          <div className="left">
            {data.education.degree1.university && (
              <p>{data.education.degree1.university}</p>
            )}
            {data.education.degree1.degree && (
              <i>{data.education.degree1.degree}</i>
            )}
          </div>
          <div className="right">
            {data.education.degree1.graduation && (
              <p>{data.education.degree1.graduation}</p>
            )}
            {data.education.degree1.other && (
              <p>{data.education.degree1.other}</p>
            )}
          </div>
        </div>

        <div className="degree-info">
          <div className="left">
            {data.education.degree2.university && (
              <p>{data.education.degree2.university}</p>
            )}
            {data.education.degree2.degree && (
              <i>{data.education.degree2.degree}</i>
            )}
          </div>
          <div className="right">
            {data.education.degree2.graduation && (
              <p>{data.education.degree2.graduation}</p>
            )}
            {data.education.degree2.other && (
              <p>{data.education.degree2.other}</p>
            )}
          </div>
        </div>

        {/* <div className="tech-info simple">
          <div className="skill-info">
            <p>Skills</p>
            {data.tech.simple.skill_1 && <p>{data.tech.simple.skill_1}</p>}
            {data.tech.simple.skill_2 && <p>{data.tech.simple.skill_2}</p>}
            {data.tech.simple.skill_3 && <p>{data.tech.simple.skill_3}</p>}
            {data.tech.simple.skill_4 && <p>{data.tech.simple.skill_4}</p>}
          </div>
        </div> */}

        {/* Set this to complex hardcoded for now */}
        <div className="title">
          <h3>Technical Skills</h3>
        </div>
        <div className="tech-info complex">
          <TechExperience data={data} />
        </div>


        <div className="title">
          <h3>Work Experience</h3>
        </div>
        <div className="work-info">
          <WorkExperience data={data} />
        </div>
        <div className="title">
          <h3>Project</h3>
        </div>
        <div className="project-info">
          <ProjectExperience data={data} />
        </div>

        <div className="title">
          <h3>CERTIFICATES, SKILLS & INTERESTS</h3>
        </div>

        <div className="etc-info">
          {data.etc.certificate && (
            <div className="row">
              <p className="info-title">Certificates: </p>
              <p> {data.etc.certificate}</p>
            </div>
          )}
          {data.etc.skills && (
            <div className="row">
              <p className="info-title">Skills: </p>
              <p>{data.etc.skills}</p>
            </div>
          )}
          {data.etc.interest && (
            <div className="row">
              <p className="info-title">Interest: </p>
              <p>{data.etc.interest}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const JobInfo = ({ jobData }) => {
  return (
    <>
      <div className="job-info">
        {/* <p>{jobData.name || "Job"}</p> */}
        <div className="left">
          <p className="info-title">{jobData.name}</p>
          <i>{jobData.title}</i>
        </div>
        <div className="right">
          <p>{jobData.duration}</p>
          <p>{jobData.address}</p>
        </div>
      </div>
      <ul>
        {Object.values(jobData.bulletPoint).map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </>
  );
};

const WorkExperience = ({ data }) => {
  const jobKeys = Object.keys(data.work);

  return (
    <div className="work-experience">
      {jobKeys.map((jobKey) => (
        <JobInfo key={jobKey} jobData={data.work[jobKey]} />
      ))}
    </div>
  );
};

const ProjectInfo = ({ jobData }) => {
  return (
    <div className="project-info">
      <div className="left">
        <p className="info-title">{jobData.name}</p>
        <i> -{jobData.techStack}</i>
      </div>
      <ul>
        {Object.values(jobData.bulletPoint).map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

const ProjectExperience = ({ data }) => {
  const jobKeys = Object.keys(data.project);

  return (
    <div className="project-experience">
      {jobKeys.map((jobKey) => (
        <ProjectInfo key={jobKey} jobData={data.project[jobKey]} />
      ))}
    </div>
  );
};

const TechInfo = ({ Data, Title }) => {
  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="left">
        <p className="info-title">{capitalizeFirstLetter(Title)}: </p>
        <div className="right">
          {Object.values(Data).map((bullet, index, arr) => (
            <p key={index}>
              {bullet}
              {index !== arr.length - 1 ? "," : ""}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const TechExperience = ({ data }) => {
  const keys = Object.keys(data.tech.complex);

  return (
    <div className="tech-info">
      {keys.map((key) => (
        <TechInfo key={key} Title={key} Data={data.tech.complex[key]} />
      ))}
    </div>
  );
};

export default LivePage;
