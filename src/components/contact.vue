<template>
<div class="container">
  <div style="text-align:center" class="container">
    <p style="color:orange">Swing by for a cup of coffee, or leave us a message:</p>
  </div>

  <div class="row">
    
    <div class="column">
      <h1>Address</h1>
      <p>Old Bowenpally,</p>
      <p>Hyderabad</p>
      </div>
  <div class="column">
<h2><i class="fas fa-envelope-open"></i>Email</h2>
<p>support@staforce.in</p>
</div>
<div class="column">

      <form @submit.prevent="sendEmail">
        <label for="fname">Name</label>
        <input type="text" id="fname" name="name" v-model="name" placeholder="Your name..">
        <label for="lname">Phone</label>
        <input type="text" id="phone" name="phone" v-model="phone" placeholder="Your phone no..">
        <label for="gender">Gender</label>
        <select id="gender" name="gender"  v-model="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Write something.." style="height:170px"  v-model="message"></textarea>
        <input type="submit" value="Submit">
      </form>

    </div>
</div>

 </div>
</template>


<script>
import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      phone: '',
      gender:'',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_k8s6umv', 'template_2z16xy8', e.target, 'user_rsrapxIJiaUt4Jl2mzi0V', {
          name: this.name,
          phone: this.phone,
          gender: this.gender,
          message: this.meessage
        })
        console.log('it works!!!')
      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.phone = ''
      this.gender = ''
      this.message
    },
  }
}
</script>




<style>
* {
  box-sizing: border-box;
}


/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #0906F0;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #087A7C;
}

/* Style the container/contact section */
.container {
  border-radius: 5px;
  background-color: #47E9E4;
  padding: 18px;
}

/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 10%;
  margin-top: 6px;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>