<div class="nav">
    <label class='nav__logo '>❤ TodoList</label>
    <icon class="nav__add" bindtap="showModal"></icon>
</div>
<script type="text/javascript">
    var vm = new Vue({
        methods: function(event) {
            if (event) {
                this.setData({
                    showModal: true
                })
            }
        }
    })
</script>