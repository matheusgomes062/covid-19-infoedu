<template>
  <div class="content">
    <h1 class="title">Registrar Participante</h1>

    <h3 class="subtitle">
      Preencha com suas informações para entrarmos em contato para uma pesquisa
      sobre covid!
    </h3>

    <form class="form">
      <div class="form-group">
        <label class="form-label" for="name">Nome do participante</label>
        <input
          v-model="$v.form.name.$model"
          type="text"
          placeholder="Qual o nome do participante?"
          class="form-control"
          id="name"
        />
        <div v-if="$v.form.name.$error && !$v.form.name.required" class="error">
          Nome necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="cpf">Cpf do participante</label>
        <the-mask
          v-model="$v.form.cpf.$model"
          type="text"
          placeholder="Qual o cpf do participante?"
          class="form-control"
          id="cpf"
          :mask="['###.###.###-##']"
        />
        <div v-if="$v.form.cpf.$error && !$v.form.cpf.required" class="error">
          CPF necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="comorbidity"
          >Participante está no grupo de risco?</label
        >
        <div class="radioOptionContainer">
          <input
            type="radio"
            id="hasComorbidity"
            value="true"
            v-model="$v.form.comorbidity.$model"
          />
          <label for="hasComorbidity">Sim</label>
        </div>
        <div class="radioOptionContainer">
          <input
            type="radio"
            id="dontHaveComorbidity"
            value="false"
            v-model="$v.form.comorbidity.$model"
          /><label for="dontHaveComorbidity">Não</label>
        </div>
        <div
          v-if="$v.form.comorbidity.$error && !$v.form.comorbidity.required"
          class="error"
        >
          Preenchimento necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input
          type="text"
          v-model="$v.form.email.$model"
          placeholder="participante@email.com"
          class="form-control"
          id="email"
        />
        <div
          v-if="$v.form.email.$error && !$v.form.email.required"
          class="error"
        >
          Email é necessário!
        </div>
        <div v-if="$v.form.email.$error && !$v.form.email.email" class="error">
          Email inválido!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { TheMask } from "vue-the-mask";
export default {
  components: {
    TheMask
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        cpf: null,
        comorbidity: null
      }
    };
  },
  computed: {},
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      cpf: {
        required
      },
      comorbidity: {
        required
      }
    }
  },
  methods: {
    reset() {
      this.form.name = null;
      this.form.email = null;
      this.form.cpf = null;
      this.form.comorbidity = null;
      this.$v.$reset();
    },
    submit() {
      this.$v.$touch();
      return new Promise((resolve, reject) => {
        if (!this.$v.$invalid) {
          resolve({
            name: this.form.name,
            email: this.form.email,
            cpf: this.form.cpf,
            comorbidity: this.form.comorbidity
          });
        } else {
          reject("invalid patient detail");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 10px 0;
}

.subtitle {
  margin: 10px 0;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  min-width: 400px;
}

.form-group {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  label {
    margin-bottom: 5px;
  }
  .radioOptionContainer {
    display: flex;
    align-items: center;
    label {
      margin: 0 5px !important;
    }
  }
}
</style>
