<script>
  import { link } from 'svelte-spa-router'

</script>

    <!-- navbar -->
    <div class="navbar">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="col s6 content-left">
                        <a href="/" use:link class="left"><img src="images/prev.png" alt="" width="50%" class="prev"></a>
                    </div>
                    <div class="col s6 content-right">
                        <p class="white-text axustes">AXUSTES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end navbar -->

<style>

    /*navbar*/

.navbar {
    padding: 15px 0 11px;
    background-color: #212121;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
}

.navbar i {
    font-size: 22px;
    margin-top: 3px;
}

.navbar h1 {
    font-size: 24px;
    padding: 0;
    margin: 0;
    font-weight: 900;
    letter-spacing: 1px;
}

.navbar .content-left {
    display: inline-flex;
    vertical-align: middle;
}

.navbar .content-right {
    text-align: right;
    vertical-align: middle;
}

.navbar .row {
    margin-bottom: 0;
}

.navbar .content-left .sidebar {
    margin-right: 18px;
}

.navbar .content-right .sidebar-search {
    margin-right: 14px;
}

.navbar .content-right .sidebar-cart i,
.navbar .content-right .sidebar-search i {
    position: relative;
    left: 8px;
}

.axustes{
    text-align: right;
}

.prev{
    padding-top: 5px;
}
</style>