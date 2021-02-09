<template functional>
    <div class="base-container">
        <div class="base-container__header">
            <slot name="header"></slot>
        </div>
        <div class="base-container__main">
            <div class="base-container__main-left">
                <slot name="left"></slot>
            </div>
            <div class="base-container__main-center">
                <slot name="center"></slot>
            </div>
            <div class="base-container__main-right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>