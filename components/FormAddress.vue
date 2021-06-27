<template>
  <div class="content">
    <h1 class="title">Registrar Participante</h1>

    <h3 class="subtitle">
      Preencha as informações de localização para entrarmos em contato para uma
      pesquisa sobre covid!
    </h3>

    <form class="form">
      <div class="form-group">
        <label class="form-label" for="address">Endereço do participante</label>
        <input
          v-model="$v.form.address.$model"
          type="text"
          placeholder="Qual o endereço do participante?"
          class="form-control"
          id="address"
        />
        <div
          v-if="$v.form.address.$error && !$v.form.address.required"
          class="error"
        >
          Endereço necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="district">Bairro do participante</label>
        <input
          v-model="$v.form.district.$model"
          type="text"
          placeholder="Qual o bairro do participante?"
          class="form-control"
          id="district"
        />
        <div
          v-if="$v.form.district.$error && !$v.form.district.required"
          class="error"
        >
          Bairro necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="state">Estado</label>
        <input
          v-model="$v.form.state.$model"
          type="select"
          placeholder="Selectione o Estado"
          class="form-control"
          id="state"
        />
        <div
          v-if="$v.form.state.$error && !$v.form.state.required"
          class="error"
        >
          Estado necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="city">Cidade</label>
        <input
          v-model="$v.form.city.$model"
          type="select"
          placeholder="Selectione a Cidade"
          class="form-control"
          id="city"
        />
        <div v-if="$v.form.city.$error && !$v.form.city.required" class="error">
          Cidade necessária!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "FormAddress",
  props: {
    wizardData: {
      type: Object,
      required: true
    }
  },
  components: {},
  data() {
    return {
      form: {
        address: null,
        district: null,
        state: null,
        city: null
      }
    };
  },
  computed: {},
  validations: {
    form: {
      address: {
        required
      },
      district: {
        required
      },
      state: {
        required
      },
      city: {
        required
      }
    }
  },
  methods: {
    reset() {
      this.form.address = null;
      this.form.district = null;
      this.form.state = null;
      this.form.city = null;
      this.$v.$reset();
    },
    submit() {
      this.$v.$touch();
      return new Promise((resolve, reject) => {
        if (!this.$v.$invalid) {
          resolve({
            address: this.form.address,
            district: this.form.district,
            state: this.form.state,
            city: this.form.city
          });
        } else {
          reject("invalid vaccine detail");
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
