<template>
    <div class="demo-page">
        <demo-header></demo-header>
        <ul>
            <li class="demo-badge">
                <h-badge type="primary" size="large" class="demo-badge-item">40</h-badge>
                <h-badge type="error" size="large" class="demo-badge-item">20</h-badge>
                <h-badge type="success" size="large" class="demo-badge-item">10</h-badge>
                <h-badge type="warning" size="large" class="demo-badge-item">10</h-badge>
            </li>
            <li class="demo-badge">
                <h-badge type="primary" class="demo-badge-item">40</h-badge>
                <h-badge type="error" class="demo-badge-item">20</h-badge>
                <h-badge type="success" class="demo-badge-item">10</h-badge>
                <h-badge type="warning" class="demo-badge-item">10</h-badge>
            </li>
            <li class="demo-badge">
                <h-badge type="primary" size="small" class="demo-badge-item">40</h-badge>
                <h-badge type="error" size="small" class="demo-badge-item">20</h-badge>
                <h-badge type="success" size="small" class="demo-badge-item">10</h-badge>
                <h-badge type="warning" size="small" class="demo-badge-item">10</h-badge>
            </li>
            <li class="demo-badge">
                <h-badge color="gray" size="small" class="demo-badge-item">自定义颜色</h-badge>
            </li>
            <li class="demo-badge">
                <h-cell title="徽章">
                    未读消息 <h-badge size="small">10</h-badge>
                </h-cell>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.demo-badge{
    padding: .1rem;
}
.demo-badge-item{
    margin: .1rem 0.05rem;
}
</style>
