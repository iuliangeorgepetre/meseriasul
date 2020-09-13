<template>

    <div>
        <div v-if="jobsExist" class="text-left ">
            <v-card v-for="job in jobs.allJobs" :key="job._id" class="p-3 m-3">
                <h2>{{job.title}}</h2>
                <p>Rata orara: {{job.hourlyRate}}</p>
                <p>Locatie: {{job.location}}</p>
                <sub>Data Adaugarii {{job.dateAdded}}</sub>
            </v-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'APIVisualizer',
    data(){
        
        return{
            jobs: [],
            errors: [],
            jobsExist:0
        }
    },


    created(){
        axios.get('http://localhost:3000/api/jobs')
        .then(response=> {
            this.jobs = response.data;
            console.log(this.jobs);
            this.jobsExist = !this.jobsExist;
        })
        .catch(errors => {
            this.errors.push(errors);
        })
    }
}
</script>


<style>
.p-3{
    padding:1.2rem!important;
}

.m-3{
    margin:1rem;
}
</style>