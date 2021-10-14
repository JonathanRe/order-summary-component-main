<script setup>
</script>

<template>
    <main class="mx-6 mt-20 rounded-2xl overflow-hidden bg-white shadow-2xl xs:max-w-md xs:mx-auto xs:mt-28">
        <img src="../assets/illustration-hero.svg" alt="Woman with headphones on and a cellphone in hand, dancing in front of a night time skyline amidst floating musical notes">
        <div class="p-6 xs:p-12">
            <h1 class="mt-2 font-black text-2xl text-center text-gray-800 xs:text-3xl">Order Summary</h1>
            <p class="mt-4 px-1 text-center">
                You can now listen to millions of songs, audiobooks, and podcasts on any
                device anywhere you like!
            </p>
            <div class="flex flex-row items-center mt-6 p-4 rounded-xl bg-very-pale-blue xs:px-8">
                <img src="../assets/icon-music.svg" alt="Icon of a musical note">
                <div class="flex-grow ml-4 text-sm xs:text-base xs:ml-6">
                    <span class="font-black text-gray-800">Annual Plan</span>
                    <br>
                    <span>$59.99/year</span>
                </div>
                <a href="#" class="text-xs font-bold text-indigo-700 underline xs:text-sm hover:text-indigo-500 hover:no-underline">Change</a>
            </div>
            <button class="w-full mt-6 py-3 shadow-2xl rounded-xl bg-indigo-700 font-bold text-gray-200 hover:bg-indigo-500">Proceed to Payment</button>
            <button class="w-full mt-4 py-3 rounded-xl font-bold hover:text-gray-800">Cancel Order</button>
        </div>
    </main>
    <div class="attribution absolute bottom-0 left-0 right-0 mx-auto">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/JonathanRe">jona.re</a>.
    </div>
</template>

<style scoped>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
</style>
