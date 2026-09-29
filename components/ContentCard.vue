<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card class="overflow-hidden group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-foreground mb-3">Don't Share Your Credentials</h3>
        <p class="text-muted-foreground text-sm mb-4 leading-relaxed">Your credentials are safe with PDAccess. You don't have to share your credentials with anyone, you have the chance to share only "usage" of them.</p>
        <figure class="rounded-lg overflow-hidden">
          <img :src="`/screen/terminal_login2.png`" alt="Terminal Login" class="w-full group-hover:scale-105 transition-transform duration-300" />
        </figure>
      </div>
    </Card>

    <Card class="overflow-hidden group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-foreground mb-3">See all inventory</h3>
        <p class="text-muted-foreground text-sm mb-4 leading-relaxed">See all inventory in one place. PDAccess gathers all of your needed services in one place by presenting AWS, AZURE, GOOGLE CLOUD, or On-Prem on the same interface.</p>
        <figure class="rounded-lg overflow-hidden">
          <img :src="`/screen/server2.png`" alt="Server Inventory" class="w-full group-hover:scale-105 transition-transform duration-300" />
        </figure>
      </div>
    </Card>

    <Card class="overflow-hidden group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-foreground mb-3">One place for all cloud access</h3>
        <p class="text-muted-foreground text-sm mb-4 leading-relaxed">One place to access all clouds. One place for all of the cloud access. With only one click your cloud bridge is ready for operations. You are free to access and manage all of your IT assets with only one click.</p>
        <figure class="rounded-lg overflow-hidden">
          <img :src="`/screen/server1.png`" alt="Cloud Access" class="w-full group-hover:scale-105 transition-transform duration-300" />
        </figure>
      </div>
    </Card>

    <Card class="overflow-hidden group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-foreground mb-3">Log your Cloud</h3>
        <p class="text-muted-foreground text-sm mb-4 leading-relaxed">Activities are no more missed. By using PDAccess, you have the power to control and schedule all of your cloud activities.</p>
        <figure class="rounded-lg overflow-hidden">
          <img :src="`/screen/server2.png`" alt="Cloud Logging" class="w-full group-hover:scale-105 transition-transform duration-300" />
        </figure>
      </div>
    </Card>

    <Card class="overflow-hidden group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-foreground mb-3">You have seamless connection</h3>
        <p class="text-muted-foreground text-sm mb-4 leading-relaxed">PDAccess offers a highly protected and seamless connection With PDAccess's advanced features you will enjoy the cross cloud connection which connects your cloud resources with just one click.</p>
        <figure class="rounded-lg overflow-hidden">
          <img :src="`/screen/client2.png`" alt="Seamless Connection" class="w-full group-hover:scale-105 transition-transform duration-300" />
        </figure>
      </div>
    </Card>

    <Card class="overflow-hidden group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-foreground mb-3">Smart Proxy</h3>
        <p class="text-muted-foreground text-sm mb-4 leading-relaxed">PDAccess have the ability to connect your proxy to all kinds of protocols including SSH, TELNET, VNC, RDP, SQL, LDAP, etc.</p>
        <figure class="rounded-lg overflow-hidden">
          <img :src="`/screen/client1.png`" alt="Smart Proxy" class="w-full group-hover:scale-105 transition-transform duration-300" />
        </figure>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
</script>
