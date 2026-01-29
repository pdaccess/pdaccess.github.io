<template>
    <div id="mauticform_wrapper_pdacontactform" class="mauticform_wrapper">
        <form autocomplete="false" role="form" method="post" action="https://m.pdaccess.com/form/submit?formId=7"
            id="mauticform_pdacontactform" data-mautic-form="pdacontactform" enctype="multipart/form-data"
            @submit="checkForm">
            <div class="mauticform-error" id="mauticform_pdacontactform_error" v-for="(err, index) in errors"
                v-bind:key="index">
                <span class="is-danger">{{ err }}</span>
            </div>
            <div class="mauticform-message" id="mauticform_pdacontactform_message"></div>
            <div class="mauticform-innerform">
                <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                    <div id="mauticform_pdacontactform_first" class="mauticform-row mauticform-text mauticform-field-1">
                        <label id="mauticform_label_pdacontactform_first" for="mauticform_input_pdacontactform_first"
                            class="mauticform-label">First Name</label>
                        <input id="mauticform_input_pdacontactform_first" name="mauticform[first]" value=""
                            class="mauticform-input" type="text" />
                        <span class="mauticform-errormsg" style="display: none"></span>
                    </div>

                    <div id="mauticform_pdacontactform_last" class="mauticform-row mauticform-text mauticform-field-2">
                        <label id="mauticform_label_pdacontactform_last" for="mauticform_input_pdacontactform_last"
                            class="mauticform-label">Last Name</label>
                        <input id="mauticform_input_pdacontactform_last" name="mauticform[last]" value=""
                            class="mauticform-input" type="text" />
                        <span class="mauticform-errormsg" style="display: none"></span>
                    </div>

                    <div id="mauticform_pdacontactform_company" data-validate="text" data-validation-type="text" class="
                      mauticform-row
                      mauticform-text
                      mauticform-field-3
                      mauticform-required
                    ">
                        <label id="mauticform_label_pdacontactform_company"
                            for="mauticform_input_pdacontactform_company" class="mauticform-label">Company</label>
                        <input id="mauticform_input_pdacontactform_company" name="mauticform[company]" value=""
                            class="mauticform-input" type="text" />
                        <span class="mauticform-errormsg" style="display: none">Company</span>
                    </div>

                    <div id="mauticform_pdacontactform_email" data-validate="email" data-validation-type="text" class="
                      mauticform-row
                      mauticform-text
                      mauticform-field-3
                      mauticform-required
                    ">
                        <label id="mauticform_label_pdacontactform_email" for="mauticform_input_pdacontactform_email"
                            class="mauticform-label">Email</label>
                        <input id="mauticform_input_pdacontactform_email" name="mauticform[email]" value=""
                            class="mauticform-input" type="text" />
                        <span class="mauticform-errormsg" style="display: none">Please enter valid e-mail address</span>
                    </div>

                    <div id="mauticform_pdacontactform_comment_or_message"
                        class="mauticform-row mauticform-text mauticform-field-5">
                        <label id="mauticform_label_pdacontactform_comment_or_message"
                            for="mauticform_input_pdacontactform_comment_or_message" class="mauticform-label">Comment or
                            Message</label>
                        <textarea id="mauticform_input_pdacontactform_comment_or_message"
                            name="mauticform[comment_or_message]" class="mauticform-textarea"></textarea>
                        <span class="mauticform-errormsg" style="display: none;"></span>
                    </div>

                    <div id="mauticform_pdacontactform_please_validate" data-validate="please_validate"
                        data-validation-type="captcha" class="
                      mauticform-row
                      mauticform-text
                      mauticform-field-5
                      mauticform-required
                    ">
                        <label id="mauticform_label_pdacontactform_please_validate"
                            for="mauticform_input_pdacontactform_please_validate" class="mauticform-label">Please
                            validate
                            that you are a human {{ rand1 }} +
                            {{ rand2 }} = ?
                        </label>
                        <input id="mauticform_input_pdacontactform_please_validate" name="mauticform[please_validate]"
                            class="mauticform-input" type="text" v-model="sumresult" />
                        <span class="mauticform-errormsg" style="display: none">This is required.</span>
                    </div>

                    <div id="mauticform_pdacontactform_send" class="
                      mauticform-row
                      mauticform-button-wrapper
                      mauticform-field-6
                    ">
                        <button type="submit" name="mauticform[send]" id="mauticform_input_pdacontactform_send" value=""
                            class="mauticform-button btn btn-default is-success">
                            Send
                        </button>

                        <button type="reset" value="" class="mauticform-button btn btn-default is-danger">
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            <input type="hidden" name="mauticform[formId]" id="mauticform_pdacontactform_id" value="7" />
            <input type="hidden" name="mauticform[return]" id="mauticform_pdacontactform_return" value="" />
            <input type="hidden" name="mauticform[formName]" id="mauticform_pdacontactform_name"
                value="pdacontactform" />
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