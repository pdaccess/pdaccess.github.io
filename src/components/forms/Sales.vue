<template>

<div id="mauticform_wrapper_pdaccesssalesform" class="mauticform_wrapper">
    <form autocomplete="false" role="form" method="post" action="http://m.h2hsecure.com/form/submit?formId=2" id="mauticform_pdaccesssalesform" data-mautic-form="pdaccesssalesform" enctype="multipart/form-data">
        <div class="mauticform-error" id="mauticform_pdaccesssalesform_error"></div>
        <div class="mauticform-message" id="mauticform_pdaccesssalesform_message"></div>
        <div class="mauticform-innerform">

            
          <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">

            <div id="mauticform_pdaccesssalesform_fist_name" class="mauticform-row mauticform-text mauticform-field-1">
                <label id="mauticform_label_pdaccesssalesform_fist_name" for="mauticform_input_pdaccesssalesform_fist_name" class="mauticform-label">Fist Name</label>
                <input id="mauticform_input_pdaccesssalesform_fist_name" name="mauticform[fist_name]" value="" class="mauticform-input" type="text">
                <span class="mauticform-errormsg" style="display: none;"></span>
            </div>

            <div id="mauticform_pdaccesssalesform_last_name" class="mauticform-row mauticform-text mauticform-field-2">
                <label id="mauticform_label_pdaccesssalesform_last_name" for="mauticform_input_pdaccesssalesform_last_name" class="mauticform-label">Last Name</label>
                <input id="mauticform_input_pdaccesssalesform_last_name" name="mauticform[last_name]" value="" class="mauticform-input" type="text">
                <span class="mauticform-errormsg" style="display: none;"></span>
            </div>

            <div id="mauticform_pdaccesssalesform_company" class="mauticform-row mauticform-text mauticform-field-3">
                <label id="mauticform_label_pdaccesssalesform_company" for="mauticform_input_pdaccesssalesform_company" class="mauticform-label">Company</label>
                <input id="mauticform_input_pdaccesssalesform_company" name="mauticform[company]" value="" class="mauticform-input" type="text">
                <span class="mauticform-errormsg" style="display: none;"></span>
            </div>

            <div id="mauticform_pdaccesssalesform_f_message" class="mauticform-row mauticform-text mauticform-field-4">
                <label id="mauticform_label_pdaccesssalesform_f_message" for="mauticform_input_pdaccesssalesform_f_message" class="mauticform-label">Message</label>
                <textarea id="mauticform_input_pdaccesssalesform_f_message" name="mauticform[f_message]" class="mauticform-textarea"></textarea>
                <span class="mauticform-errormsg" style="display: none;"></span>
            </div>

            <div id="mauticform_pdaccesssalesform_submit" class="mauticform-row mauticform-button-wrapper mauticform-field-5">
                <button type="submit" name="mauticform[submit]" id="mauticform_input_pdaccesssalesform_submit" value="" class="mauticform-button btn btn-default">Submit</button>
            </div>
            </div>
        </div>

        <input type="hidden" name="mauticform[formId]" id="mauticform_pdaccesssalesform_id" value="2">
        <input type="hidden" name="mauticform[return]" id="mauticform_pdaccesssalesform_return" value="">
        <input type="hidden" name="mauticform[formName]" id="mauticform_pdaccesssalesform_name" value="pdaccesssalesform">

        </form>
</div>
</template>
<script>
export default {
    data() {
        return {
            rand1: Math.floor(Math.random() * 10),
            rand2: Math.floor(Math.random() * 10),
            sumresult: 0,
            errors: [],
        };
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];
            if (this.sumresult == this.rand1 + this.rand2) {
                this.sumresult = 10
                return true;
            } else {
                this.errors.push("Wrong Calculation");
            }

            e.preventDefault();
        },
    }
}
</script>
<style scoped lang="scss">
@import "@/assets/bulma/main.scss";

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

.mauticform-button-wrapper {
    @extend .buttons;
    margin-top: 10px;
}

.mauticform-textarea {
    @extend .textarea;
}
</style>