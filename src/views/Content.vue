<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child card notification is-info is-light">
            <p class="title">Don't Share Your Credentials</p>
            <div class="card-content">
              <p class="subtitle">
                Your credentials are safe with PDAccess. You don’t have to share
                your credentials with anyone, you have the chance to share only
                “usage” of them.
              </p>
              <figure class="image is-4by3">
                <img :src="require(`@/assets/screen/terminal_login.gif`)" />
              </figure>
            </div>
          </article>
          <article class="tile is-child card notification is-info is-light">
            <p class="title">See all inventory</p>
            <p class="subtitle">
              See all inventory in one place. PDAccess gathers all of your
              needed services in one place by presenting AWS, AZURE, GOOGLE
              CLOUD, or On-Prem on the same interface.
            </p>
            <figure class="image is-4by3">
              <img :src="require(`@/assets/screen/server2.png`)" />
            </figure>
          </article>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child card notification is-primary is-light">
            <p class="title">One place for all cloud access</p>
            <p class="subtitle">
              One place to access all clouds. One place for all of the cloud
              access. With only one click your cloud bridge is ready for
              operations. You are free to access and manage all of your IT
              assets with only one click.
            </p>
            <figure class="image is-4by3">
              <img :src="require(`@/assets/screen/server1.png`)" />
            </figure>
          </article>
          <article class="tile is-child card notification is-info is-light">
            <p class="title">Log your Cloud</p>
            <p class="subtitle">
              Activities are no more missed. By using PDAccess, you have the
              power to control and schedule all of your cloud activities.
            </p>
            <figure class="image is-4by3">
              <img :src="require(`@/assets/screen/server2.png`)" />
            </figure>
          </article>
        </div>

        <div class="tile is-parent is-vertical">
          <article class="tile is-child card notification is-info is-light">
            <p class="title">You have seemless connection</p>
            <p class="subtitle">
              PDAccess offers a highly protected and seemless connection With
              PDAccess’s advanced features you will enjoy the cross cloud
              connection which connects your cloud resources with just one
              click.
            </p>
            <figure class="image is-4by3">
              <img :src="require(`@/assets/screen/client2.png`)" />
            </figure>
          </article>
          <article class="tile is-child card notification is-info is-light">
            <p class="title">Smart Proxy</p>
            <p class="subtitle">
              PDAccess have the ability to connect your proxy to all kinds of
              protocols including SSH, TELNET, VNC, RDP, SQL, LDAP, etc.
            </p>
            <figure class="image is-4by3">
              <img :src="require(`@/assets/screen/client1.png`)" />
            </figure>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Content",
};
</script>