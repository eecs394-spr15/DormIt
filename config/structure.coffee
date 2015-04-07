# Read more about app structure at http://docs.appgyver.com

module.exports =

  rootView:
    location: "homepage#index"

  # rootView:
  #   location: "example#getting-started"

# drawers:
#   left:
#     id: "leftDrawer"
#     location: "example#drawer"
#     showOnAppLoad: false
#   options:
#     animation: "swingingDoor"
#
# initialView:
#   id: "initialView"
#   location: "example#initial-view"
  preloads: [
    {
      id: "search"
      location: "homepage#search"
    }
    {
      id: "index"
      location: "homepage#index"
    }
  ]
