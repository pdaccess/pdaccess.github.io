<template>
  <div id="mauticform_wrapper_stajbasvuruformu" class="mauticform_wrapper">
    <form
      autocomplete="false"
      role="form"
      method="post"
      action="https://m.pdaccess.com/form/submit?formId=6"
      id="mauticform_stajbasvuruformu"
      data-mautic-form="stajbasvuruformu"
      enctype="multipart/form-data"
    >
      <div
        class="mauticform-error"
        id="mauticform_stajbasvuruformu_error"
      ></div>
      <div
        class="mauticform-message"
        id="mauticform_stajbasvuruformu_message"
      ></div>
      <div class="mauticform-innerform">
        <div
          class="mauticform-page-wrapper mauticform-page-1"
          data-mautic-form-page="1"
        >
          <!-- <div
            id="mauticform_stajbasvuruformu_login_with_linkedin"
            class="mauticform-row mauticform-div-wrapper mauticform-field-1"
          >
            <label
              id="mauticform_label_stajbasvuruformu_login_with_linkedin"
              for="mauticform_input_stajbasvuruformu_login_with_linkedin"
              class="mauticform-label"
              >Login With Linkedin</label
            >
            <a
              href="#"
              onclick="openOAuthWindow('https://m.pdaccess.com/plugins/integrations/authuser/LinkedIn')"
            >
              <img
                src="https://m.pdaccess.com/media/images/btn_LinkedIn.png"
              />
            </a>
          </div> -->

          <div
            id="mauticform_stajbasvuruformu_name_surname"
            class="mauticform-row mauticform-text mauticform-field-2 col-md-6"
          >
            <label
              id="mauticform_label_stajbasvuruformu_name_surname"
              for="mauticform_input_stajbasvuruformu_name_surname"
              class="mauticform-label"
              >Name</label
            >
            <input
              id="mauticform_input_stajbasvuruformu_name_surname"
              name="mauticform[name_surname]"
              value
              class="mauticform-input"
              type="text"
            />
            <span class="mauticform-errormsg" style="display: none"></span>
          </div>

          <div
            id="mauticform_stajbasvuruformu_birth_date"
            class="mauticform-row mauticform-text mauticform-field-3"
          >
            <label
              id="mauticform_label_stajbasvuruformu_birth_date"
              for="mauticform_input_stajbasvuruformu_birth_date"
              class="mauticform-label"
              >Surname</label
            >
            <input
              id="mauticform_input_stajbasvuruformu_birth_date"
              name="mauticform[birth_date]"
              value
              class="mauticform-input"
              type="text"
            />
            <span class="mauticform-errormsg" style="display: none"></span>
          </div>

          <div
            id="mauticform_stajbasvuruformu_email"
            data-validate="email"
            data-validation-type="text"
            class="mauticform-row mauticform-text mauticform-field-4 mauticform-required"
          >
            <label
              id="mauticform_label_stajbasvuruformu_email"
              for="mauticform_input_stajbasvuruformu_email"
              class="mauticform-label"
              >E-mail Address</label
            >
            <input
              id="mauticform_input_stajbasvuruformu_email"
              name="mauticform[email]"
              value
              class="mauticform-input"
              type="text"
            />
            <span class="mauticform-errormsg" style="display: none"
              >This is required.</span
            >
          </div>

          <div
            id="mauticform_stajbasvuruformu_which_university_and_depa"
            class="mauticform-row mauticform-text mauticform-field-5"
          >
            <label
              id="mauticform_label_stajbasvuruformu_which_university_and_depa"
              for="mauticform_input_stajbasvuruformu_which_university_and_depa"
              class="mauticform-label"
              >Which university and department that you graduated or still
              ongoing?</label
            >
            <input
              id="mauticform_input_stajbasvuruformu_which_university_and_depa"
              name="mauticform[which_university_and_depa]"
              value
              class="mauticform-input"
              type="text"
            />
            <span class="mauticform-errormsg" style="display: none"></span>
          </div>

          <div
            id="mauticform_stajbasvuruformu_how_you_interest_about_cy"
            class="mauticform-row mauticform-text mauticform-field-6"
          >
            <label
              id="mauticform_label_stajbasvuruformu_how_you_interest_about_cy"
              for="mauticform_input_stajbasvuruformu_how_you_interest_about_cy"
              class="mauticform-label"
              >How you interest about Cyber Security? What is your level about
              that topic?</label
            >
            <input
              id="mauticform_input_stajbasvuruformu_how_you_interest_about_cy"
              name="mauticform[how_you_interest_about_cy]"
              value
              class="mauticform-input"
              type="text"
            />
            <span class="mauticform-errormsg" style="display: none"></span>
          </div>

          <div
            id="mauticform_stajbasvuruformu_cv"
            class="mauticform-row mauticform-file mauticform-field-7"
          >
            <label
              id="mauticform_label_stajbasvuruformu_cv"
              for="mauticform_input_stajbasvuruformu_cv"
              class="mauticform-label"
              >CV</label
            >
            <input
              id="mauticform_input_stajbasvuruformu_cv"
              name="mauticform[cv]"
              value
              class="mauticform-input"
              type="file"
            />
            <span class="mauticform-errormsg" style="display: none"></span>
          </div>

          <div
            id="mauticform_stajbasvuruformu_f_352"
            data-validate="f_352"
            data-validation-type="captcha"
            class="mauticform-row mauticform-text mauticform-field-8 mauticform-required"
          >
            <label
              id="mauticform_label_stajbasvuruformu_f_352"
              for="mauticform_input_stajbasvuruformu_f_352"
              class="mauticform-label"
              >3+5-2</label
            >
            <input
              id="mauticform_input_stajbasvuruformu_f_352"
              name="mauticform[f_352]"
              value
              class="mauticform-input"
              type="text"
            />
            <span class="mauticform-errormsg" style="display: none"
              >This is required.</span
            >
          </div>
          <br />
          <div
            id="mauticform_stajbasvuruformu_submit"
            class="mauticform-row mauticform-button-wrapper mauticform-field-9"
          >
            <button
              type="submit"
              name="mauticform[submit]"
              id="mauticform_input_stajbasvuruformu_submit"
              value
              class="mauticform-button is-link"
            >
              Send
            </button>
            &nbsp;&nbsp;
            <button
              type="clear"
              name="mauticform[clear]"
              id="mauticform_input_h2hcompanycontactform_clear"
              value=""
              class="mauticform-button is-danger"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <input
        type="hidden"
        name="mauticform[formId]"
        id="mauticform_stajbasvuruformu_id"
        value="6"
      />
      <input
        type="hidden"
        name="mauticform[return]"
        id="mauticform_stajbasvuruformu_return"
        value
      />
      <input
        type="hidden"
        name="mauticform[formName]"
        id="mauticform_stajbasvuruformu_name"
        value="stajbasvuruformu"
      />
    </form>
  </div>
</template>
<style scoped lang="scss">
@import "bulma";

.mauticform-input {
  @extend .input;
}
.mauticform-label {
  @extend .label;
  color: white;
}
.mauticform-button {
  @extend .button;
}
.mauticform-row {
  @extend .field;
}
</style>