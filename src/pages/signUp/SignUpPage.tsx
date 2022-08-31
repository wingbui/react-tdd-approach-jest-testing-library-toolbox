export const SignUpPage = () => {
  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' placeholder='username' />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' placeholder='email' />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' placeholder='password' />
        </div>

        <div>
          <label htmlFor='passwordConfirm'>Password Confirm</label>
          <input
            id='passwordConfirm'
            type='password'
            placeholder='password confirm'
          />
        </div>

        <div>
          <button disabled>Sign Up</button>
        </div>
      </form>
    </>
  );
};
