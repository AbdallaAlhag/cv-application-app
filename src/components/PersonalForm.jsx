const LoginForm = () => {
  return (
    <>
      <h2>Personal Details</h2>
      <form>
        <div>
          <div>
            <label htmlFor="FullName">Full Name</label>
            <input type="text" id="FullName" name="FullName" />
          </div>
          <div>
            <label htmlFor="JobTitle">
              Job Title <i>optional</i>
            </label>
            <input type="text" id="JobTitle" name="JobTitle" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </div>
        <div>
          <label htmlFor="address">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="summary">Professional Summary</label>
          <textarea id="summary" name="summary" rows="4" cols="50"></textarea>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
