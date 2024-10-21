<script setup>
import SocialIcon from './SocialIcon.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconGithub from './icons/IconGithub.vue';
const socialIcons = [
  {
    icon: IconLinkedin,
    url: 'https://www.linkedin.com/in/kevinphanle/'
  },
  {
    icon: IconGithub,
    url: 'https://github.com'
  }
]
</script>

<template>
  <footer className="footer">
    <!-- <a href="#home" className="returntotop-btn">
      <span className="icon-arrow-right"></span>
    </a> -->

    <div className="footer-content">
      <div className="left">
        <h3>Reach me at: </h3>

        <div className="contact">
          <a
            href="mailto: kevinphanle11@gmail.com"
            className="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            kevinphanle11@gmail.com
          </a>
          <p>(408) 705 3276</p>
        </div>
        <p className="copyright">
          Kevin Lê <span>©2024</span>
        </p>
      </div>

      <div className="right">
        <ul className="social-icons">
          <template v-for="icon in socialIcons">
            <SocialIcon :icon="icon"></SocialIcon>
          </template>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  width: 100%;
  background: #0c0c0c;

  padding: 4rem 0;
  position: relative;
  text-align: center;

  .returntotop-btn {
    position: absolute;
    padding: 5px;
    top: -10px;
    color: white;
    text-decoration: none;
    background: gray;
    transition: all 0.2s;

    span {
      transform: rotate(-90deg);
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover {

      span {
        color: white;
      }
    }
  }

  .footer-content {
    display: flex;
    /* justify-content: space-evenly; */
    gap: 2rem;
    margin: 0 auto;
    /* width: 80%; */
    width: 1000px;

    .left {

      text-align: left;

      h3 {
        margin-bottom: 0.5rem;
        color: white;
      }

      .contact {
        margin-top: 0.5rem;
        color: white;
        font-size: 0.8rem;
        font-weight: 300;

        .email {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .copyright {
        margin-top: 1rem;
        font-weight: 100;
        font-size: 0.7rem;
        text-transform: uppercase;
        color: cyan;

        span {
          color: white;
        }
      }
    }

    .right {
      text-align: right;
      display: flex;
      align-items: center;

      .social-icons {
        display: flex;
        justify-content: space-between;
        list-style: none;

        li {
          margin: 0 15px;

          
        }
      }
    }
  }
}



</style>
