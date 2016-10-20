Congo.View = Backbone.View.extend({
    render: function () {
        var source = $(this.template).html();
        var compiled = _.template(source, this.model.toJSON());
        this.$el.html(compiled);
        return this;
    }
});

Congo.ListView = Backbone.View.extend({
    initialize: function () {
        this.collection.bind("reset", this.render, this);
        this.collection.bind("add", this.render, this);
        this.collection.bind("remove", this.render, this);
        //this.renderOptionView();
    },
    renderOptionView: function () {
        var optionView = new Congo.DatabaseOptionView({ el: "#db-options" });
    },
    render: function () {
        var self = this;
        var els = [];
        this.collection.each(function (item) {
            var itemView = new self.ItemView({ model: item });
            els.push(itemView.render().el);
        });
        this.$el.html(els);
        return this;
        //$("#database-list").append(this.el);
    }
});

Congo.DetailsView = Backbone.View.extend({
    render: function () {
        // load up our db details and options views
        var listView = new Congo.DatabaseListView({ collection: Congo.databases });
        var optionView = new Congo.DatabaseOptionView();

        //render them to this el
        this.$el.append(listView.render().el);
        this.$el.append(optionView.render().el);

        return this;
    }
});