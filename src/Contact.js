import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.680565243596!2d76.69157349999999!3d30.699262500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb3a5eb21e7%3A0x89798321433f1815!2sHopingMinds!5e0!3m2!1sen!2sin!4v1713120138028!5m2!1sen!2sin"
       width="100%"
        height="450"
         style={{border:0}}
          allowFullScreen="" 
          loading="lazy"
           referrerpolicy="no-referrer-when-downgrade"></iframe>

           <div className="container">
            <div className="contact-form">
              <form action="" method="POST" className="contact-inputs">
                <input type="text" placeholder="username" name="username" required autoComplete="off" value=""/>
                <input type="email" placeholder="Email" name="Email" required autoComplete="off" value=""/>
                <textarea name="msg" cols="30" rows="10" required autoComplete="off" placeholder="Enter your Message"/>
                <input type="submit" value="submit" />
              </form>
            </div>
           </div>
    </Wrapper>
  )
  
};

export default Contact;
