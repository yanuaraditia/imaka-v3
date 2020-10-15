<template>
    <div>
        <section class="py-5">
            <div class="container-fluid my-lg-5 pt-lg-4">
                <div class="row">
                    <div class="col-lg-7">
                        <my-jumbotron title="Kuisioner" desc="Form penelusuran minat siswa"></my-jumbotron>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group
                                :id="`input-group-${item.key}`"
                                :label="`${item.name}:`"
                                label-for="input-1"
                                v-for="item in form"
                                :key="item.key"
                                :description="item.description"
                            >
                                <b-form-input
                                v-if="item.form == 'group'"
                                :id="`input-${item.key}`"
                                v-model="item.value"
                                :type="item.type"
                                :name="item.field"
                                required
                                :placeholder="item.placeholder"
                                ></b-form-input>
                                <div v-else-if="item.form == 'radio'">
                                    <b-form-radio
                                    v-model="item.value"
                                    v-for="radio in item.values"
                                    :name="item.field"
                                    :key="radio.key"
                                    :value="radio.key">{{radio.name}}</b-form-radio>
                                </div>
                            </b-form-group>
                        <b-button type="submit" variant="primary" size="lg" class="px-lg-4">Lanjutkan</b-button>
                        <b-button type="reset" variant="link">Reset</b-button>
                        </b-form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const qs = require('querystring')
export default {
    data() {
        return {
            show: true,
            form: [
                {
                    key: 1,
                    name: 'Nama Lengkap',
                    field: 'name',
                    value: '',
                    placeholder: 'Ketik nama lengkapmu',
                    type: 'text',
                    description: null,
                    form: 'group'
                },
                {
                    key: 2,
                    name: 'Alamat E-mail',
                    field: 'email',
                    value: '',
                    placeholder: 'E-mail aktif',
                    type: 'email',
                    description: 'E-mail tidak akan dibagikan ke siapapun',
                    form: 'group'
                },
                {
                    key: 3,
                    name: 'Jenis Kelamin',
                    field: 'gender',
                    value: '',
                    values: [
                        {
                            key: 'l',
                            name: 'Laki-laki',
                        },
                        {
                            key: 'p',
                            name: 'Perempuan'
                        }
                    ],
                    description: null,
                    form: 'radio'
                },
                {
                    key: 4,
                    name: 'Nomor Telepon',
                    field: 'notel',
                    value: '',
                    placeholder: '08xxxxxxx',
                    type: 'number',
                    description: 'Nomor telepon tidak akan dipublikasi kepada pihak manapun',
                    form: 'group'
                },
                {
                    key: 5,
                    name: 'Asal Sekolah',
                    field: 'slta',
                    value: '',
                    placeholder: 'SLTA Sederajat',
                    type: 'text',
                    description: null,
                    form: 'group',
                },
                {
                    key: 6,
                    name: 'Peminatan Keahlian',
                    field: 'keahlian',
                    value: '',
                    values: [
                        {
                            key: 'tk',
                            name: 'Teknis'
                        },
                        {
                            key: 'ntk',
                            name: 'Non teknis'
                        }
                    ],
                    form: 'radio'
                },
                {
                    key: 7,
                    name: 'Melanjutkan Kemana?',
                    field: 'campus',
                    value: '',
                    values: [
                        {
                            key: 'ptn',
                            name: 'Perguruan Tinggi Negeri'
                        },
                        {
                            key: 'pts',
                            name: 'Perguruan Tinggi Swasta'
                        },
                        {
                            key: 'ptk',
                            name: 'Perguruan Tinggi Kedinasan'
                        },
                        {
                            key: 'bkj',
                            name: 'Bekerja'
                        },
                        {
                            key: 'wsh',
                            name: 'Wirausaha'
                        },
                        {
                            key: 'll',
                            name: 'Lain-lain'
                        }
                    ],
                    form: 'radio'
                }
            ]
        }
    },
    head: {
        title: 'Penelusuran Minat Siswa',
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            this.sendData()
        },
        onReset(evt) {
            evt.preventDefault()
        },
        sendData() {
            var postMan = {
                name: '',
                notel: '',
                slta: '',
                gender: '',
                keahlian: '',
                campus: '',
                email: ''
            }
            for(var i = 0; i < this.form.length; i++) {
                postMan[this.form[i].field] = this.form[i].value
            }
            axios
            .post('https://api.imaka.or.id/v2/quest',qs.stringify(postMan),config)
            .then((result) => {
                if(result.data.success == true) {
                    alert(result.data.data)
                } else {
                    alert(result.data.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
    computed: {
        monthEr() {
            var date = new Date()
            var month = date.getMonth()
            return true
            // if(month >= 11 && month <= 3) {
            //     return true
            // } else {
            //     return true
            // }
        }
    },
}
</script>