Congo = {
    init: function () {
        // data
        Congo.databases = new Congo.DatabaseCollection();

        // views
        Congo.breadcrumbs = new Congo.BreadcrumbView({ el: "#nav" });
        Congo.databaseList = new Congo.DatabaseListView({ collection: Congo.databases });
        
        // start it off
        Congo.start();
    },
    start: function () {
        Congo.databases.fetch();
    }
}