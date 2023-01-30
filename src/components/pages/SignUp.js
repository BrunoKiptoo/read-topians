// // import React from 'react';
// // import '../../App.css';

// // export default function SignUp() {
// // return <h1 className='sign-up'></h1>;
// // }

// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';

// export default function SignUp() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleInputChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     setFormData({ name: '', email: '', password: '' });
//   };

//   return (
//     <div className='sign-up '>
//       {/* <h1 className='text-center'>Sign Up</h1> */}
//       <Form onSubmit={handleSubmit} >
//         <FormGroup className = "text-center">
//           <Label for='name'></Label>
//           <Input
//             type='text'
//             name='name'
//             id='name'
//             placeholder='Enter your name'
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </FormGroup>
//         <FormGroup className = "text-center">
//           <Label for='email'></Label>
//           <Input
//             type='email'
//             name='email'
//             id='email'
//             placeholder='Enter your email'
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </FormGroup>
//         <FormGroup className = "text-center">
//           <Label for='password'></Label>
//           <Input
//             type='password'
//             name='password'
//             id='password'
//             placeholder='Enter your password'
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </FormGroup>
//         <Button color='primary' className= "">Submit</Button>
//       </Form>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    window.location.href = "/services";
  };

  return (
    <div className='sign-up '>
      <Form onSubmit={handleSubmit} >
        <FormGroup className = "text-center">
          <Label for='name'></Label>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className = "text-center">
          <Label for='email'></Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className = "text-center">
          <Label for='password'></Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button color='primary' className= "">Submit</Button>
      </Form>
    </div>
  );
}
