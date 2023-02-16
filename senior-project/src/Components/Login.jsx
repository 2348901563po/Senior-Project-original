


const Login = () =>{
    return(
      <form>
        <Username />
        <Password />
        <button>Submit</button>
      </form>
  )};
  
  const Username = () =>{
    return(
    <div id='username'>
      <label htmlFor='username'></label>
      <input name='username' type='text'></input>
      </div>
    )};
  
  const Password = ()=>{
    return(
      <div id='password'>
        <label htmlFor='password'></label>
        <input name='password' type='password'></input>
      </div>
    )
  }