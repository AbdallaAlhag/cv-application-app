import "../styles/LivePage.css";

function LivePage({ data }) {
  return (
    <>
      <div className="LivePage">
        <div className="personal-info">
          <h2>Personal Data</h2>
          {data.personal.fullName && <p>{data.personal.fullName}</p>}
          {data.personal.jobTitle && <p>{data.personal.jobTitle}</p>}
          {data.personal.email && <p>{data.personal.email}</p>}
          {data.personal.phoneNumber && <p>{data.personal.phoneNumber}</p>}
          {data.personal.address && <p>{data.personal.address}</p>}
          {data.personal.summary && <p>Summary: {data.personal.summary}</p>}
        </div>

        <div className="link-info">
          <h2>Link Data</h2>
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

        <div className="etc-info">
          <h2>Certificates, skills, and interest</h2>
          {data.etc.certificates && <p>{data.etc.certificates}</p>}
          {data.etc.skills && <p>{data.etc.skills}</p>}
          {data.etc.interest && <p>{data.etc.interest}</p>}
        </div>

        <div className="Degree-info">
          <h2>Degree 2</h2>
          {data.education.degree1.university && (
            <p>{data.education.degree1.university}</p>
          )}
          {data.education.degree1.degree && (
            <p>{data.education.degree1.degree}</p>
          )}
          {data.education.degree1.graduation && (
            <p>{data.education.degree1.graduation}</p>
          )}
          {data.education.degree1.other && (
            <p>{data.education.degree1.other}</p>
          )}
        </div>

        <div className="Degree-info">
          <h2>Degree 2</h2>
          {data.education.degree2.university && (
            <p>{data.education.degree2.university}</p>
          )}
          {data.education.degree2.degree && (
            <p>{data.education.degree2.degree}</p>
          )}
          {data.education.degree2.graduation && (
            <p>{data.education.degree2.graduation}</p>
          )}
          {data.education.degree2.other && (
            <p>{data.education.degree2.other}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default LivePage;
