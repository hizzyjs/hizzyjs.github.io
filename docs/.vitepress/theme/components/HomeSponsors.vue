<script lang="ts" setup>
import {VPHomeSponsors} from "vitepress/theme"
import {useSponsor} from "../composables/sponsor"

const {data} = useSponsor()
</script>

<template>
  <VPHomeSponsors
      v-if="data"
      :data="data"
      message="Hizzy is free and open source, made possible by wonderful sponsors."
  />
  <div class="action">
    <a
        class="sponsor"
        href="https://github.com/sponsors/hizzyjs"
        rel="noreferrer"
        target="_blank"
    >
      Sponsor Hizzy
    </a>
  </div>
</template>

<style scoped>
.action {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 4rem;
}

.sponsor {
  /* .VPButton */
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  /* .VPButton.medium */
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  /* .VPButton.sponsor */
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.sponsor:hover {
  /* .VPButton.sponsor:hover */
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}
</style>
