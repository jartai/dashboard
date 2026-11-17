<script setup lang="ts">
const text =
  "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.";
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 q-mb-sm">Collapsible Accordion</div>

      <q-list bordered>
        <q-expansion-item v-for="n in 5" :key="n" :label="`Collapsible Group Item #${n}`">
          <q-card>
            <q-card-section>{{ text }}</q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
