<script setup lang="ts">
import { ref } from 'vue';
import pkg from '../../../package.json'
const { version, dependencies, devDependencies } = pkg
</script>
<template>
    <a-row :gutter="[16, 16]">
        <a-col :span="12">
            <a-descriptions title="生产依赖" bordered :column="1">
                <a-descriptions-item v-for="(value, key) in dependencies" :key="value" :label="key">
                    {{ value }}
                </a-descriptions-item>
            </a-descriptions>
        </a-col>
        <a-col :span="12">
            <a-descriptions title="开发环境依赖" bordered :column="1">
                <a-descriptions-item v-for="(value, key) in devDependencies" :key="value" :label="key">
                    {{ value }}
                </a-descriptions-item>
            </a-descriptions>
        </a-col>
    </a-row>

</template>