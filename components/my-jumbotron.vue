<template>
    <div class="mb-3">
        <h1 class="f-2 ndes-1">{{title}}</h1>
        <h5 class="font-weight-normal">{{desc}}</h5>
    </div>
</template>
<script>
export default {
    props: [
        'title',
        'desc',
    ]
}
</script>