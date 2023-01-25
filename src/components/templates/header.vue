<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand text-light fw-bold" href="#">
                    <img v-bind:src="this.logo" width="50" alt="LazyStyles logo">
                    Pure Generation
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item text-white">
                            <router-link to="/" class="text-decoration-none" active-class="fw-bold">Home</router-link>
                        </li>
                        <li class="nav-item text-white">
                            <router-link to="/" class="text-decoration-none" active-class="fw-bold">Generators</router-link>
                        </li>
                        <li class="nav-item text-white">
                            <router-link to="/" class="text-decoration-none" active-class="fw-bold">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <h1>tekst</h1>
    <p>tekst</p>
</template>

<script>
    import logoLight from '@/assets/img/logos/android-chrome-192x192-light.png'

    export default {
        data() {
            return {
                logo: logoLight
            }
        }
    }
</script>