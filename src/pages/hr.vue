<template>
  <div>
    <Section :full="true">
      <div class="container has-text-centered">
        <br />
        <h4 class="title is-1">Join our team with Cyber Security and Software Expertise</h4>
        <div class="columns">
          <div class="column is-one-third has-text-right">
            <p class="subtitle is-5">We love Cyber Security and Software together. Actually, we produce Security Softwares. Both expertise is essential for us. If you have passion about them, please don't hesitate to fill the form. We will carefully handle all applications. Every level of applicant is accepted.</p>
          </div>
          <div class="column has-text-left">
            <CvForm />
          </div>
        </div>
      </div>
    </Section>
    <section class="section" style="padding-top: 10px">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <div class="box">
              <div class="content">
                <NuxtContent :document="j1" />
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="box">
              <div class="content">
                <NuxtContent :document="j2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import Section from '~/components/Section.vue'
import CvForm from '~/components/forms/CVForm.vue'

definePageMeta({ layout: 'default' })

const { data: j1 } = await useAsyncData('hr-j1', async () => {
  const content = await useContent()
  return await content.findOne('hr', 'cybersecurity_developer')
})

const { data: j2 } = await useAsyncData('hr-j2', async () => {
  const content = await useContent()
  return await content.findOne('hr', 'cybersecurity_validation_engineer')
})
</script>
