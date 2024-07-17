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

        <div className="title">
          <h3>Technical Skills</h3>
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

        {/* Since it is dynamic we have to grab the info can't hard code it but this is still good for now */}
        <div className="tech-info complex">
          <div className="left">
            <p className="info-title">Languages: </p>
            <div className="right">
              {data.tech.complex.language.language_1 && (
                <p>{data.tech.complex.language.language_1},</p>
              )}
              {data.tech.complex.language.language_2 && (
                <p>{data.tech.complex.language.language_2},</p>
              )}
              {data.tech.complex.language.language_3 && (
                <p>{data.tech.complex.language.language_3},</p>
              )}
              {data.tech.complex.language.language_4 && (
                <p>{data.tech.complex.language.language_4}</p>
              )}
            </div>
          </div>
          <div className="left">
            <p className="info-title">Frameworks, Libraries, & Databases: </p>
            <div className="right">
              {data.tech.complex.external.external_1 && (
                <p>{data.tech.complex.external.external_1},</p>
              )}
              {data.tech.complex.external.external_2 && (
                <p>{data.tech.complex.external.external_2},</p>
              )}
              {data.tech.complex.external.external_3 && (
                <p>{data.tech.complex.external.external_3},</p>
              )}
              {data.tech.complex.external.external_4 && (
                <p>{data.tech.complex.external.external_4}</p>
              )}
            </div>
          </div>
          <div className="left">
            <p className="info-title">Tools & Other Technologies:</p>
            <div className="right">
              {data.tech.complex.tool.tool_1 && (
                <p>{data.tech.complex.tool.tool_1},</p>
              )}
              {data.tech.complex.tool.tool_2 && (
                <p>{data.tech.complex.tool.tool_2},</p>
              )}
              {data.tech.complex.tool.tool_3 && (
                <p>{data.tech.complex.tool.tool_3},</p>
              )}
              {data.tech.complex.tool.tool_4 && (
                <p>{data.tech.complex.tool.tool_4}</p>
              )}
            </div>
          </div>
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
      <div>
        {Object.values(jobData.bulletPoint).map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </div>
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
      <div>
        {Object.values(jobData.bulletPoint).map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </div>
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

export default LivePage;
