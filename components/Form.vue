<template>
  <div class="sectionContainerForm">
    <h1 class="formTitle">Responda nosso formulário sobre o covid!</h1>
    <div class="formCard">
      <div v-if="wizardInProgress" v-show="asyncState !== 'pending'">
        <keep-alive>
          <component
            ref="currentStep"
            :is="currentStep"
            @updateAsyncState="updateAsyncState"
            :wizard-data="form"
          ></component>
        </keep-alive>

        <div class="progress-bar">
          <div :style="`width: ${progress}%;`"></div>
        </div>

        <!-- Actions -->
        <div class="buttons">
          <button
            @click="goBack"
            v-if="currentStepNumber > 1"
            class="btn-outlined"
          >
            Anterior
          </button>

          <button @click="nextButtonAction" class="btn">
            {{ isLastStep ? "Finalizar" : "Próximo" }}
          </button>
        </div>
      </div>

      <div v-else class="thankYouContainer">
        <h1 class="title">Obrigado!</h1>
        <h2 class="subtitle">
          Participante registrado!
        </h2>
        <div>😎🎉</div>
      </div>
    </div>
  </div>
</template>

<script>
import FormPatientDetails from "./FormPatientDetails";
import FormAddress from "./FormAddress";
// import { api } from "@/services/index";
export default {
  name: "FormWizard",
  components: {
    FormPatientDetails,
    FormAddress
  },
  data() {
    return {
      currentStepNumber: 1,
      asyncState: null,
      steps: ["FormPatientDetails", "FormAddress"],
      form: {
        name: null,
        email: null,
        cpf: null,
        comorbidity: null,
        address: null,
        district: null,
        state: null,
        city: null
      }
    };
  },
  computed: {
    isLastStep() {
      return this.currentStepNumber === this.length;
    },
    wizardInProgress() {
      return this.currentStepNumber <= this.length;
    },
    length() {
      return this.steps.length;
    },
    currentStep() {
      return this.steps[this.currentStepNumber - 1];
    },
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    }
  },
  methods: {
    updateAsyncState(state) {
      this.asyncState = state;
    },
    async submitRegister() {
      this.asyncState = "pending";
      //test
      // this.asyncState = "success";
      this.currentStepNumber++;
      // this.$vToastify.success("Participante registrado!");
      await this.$axios
        .$post("/participants", {
          ...this.form
        })
        .then(function(response) {
          this.asyncState = "success";
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    nextButtonAction() {
      this.$refs.currentStep
        .submit()
        .then(stepData => {
          Object.assign(this.form, stepData);
          if (this.isLastStep) {
            this.submitRegister();
          } else {
            this.goNext();
          }
        })
        .catch(error => console.log(error));
    },
    goBack() {
      this.currentStepNumber--;
    },
    goNext() {
      this.currentStepNumber++;
    }
  }
};
</script>

<style lang="scss">
.sectionContainerForm {
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.formTitle {
  font-size: 4em;
  font-weight: 900;
  display: block;
  text-align: center;
}

.formCard {
  width: 500px;
  height: 600px;
  padding: 25px;
  background-color: white;
  box-shadow: 0px 0px 25px $base-dark;
  border-radius: 10px;
  margin: auto;
  outline-style: none;
  border-style: none;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;

  @include d(s) {
    width: 100%;
  }
  div {
    max-width: 100%;
  }
}

.progress-bar {
  width: 400px;
  margin: auto;
  border-radius: 9999px;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 12px;
  background: $default-gray;
}

.progress-bar > div {
  border-radius: 9999px;
  position: absolute;
  height: 100%;
  background-color: $dark-blue;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
