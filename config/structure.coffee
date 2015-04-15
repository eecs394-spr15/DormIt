# Read more about app structure at http://docs.appgyver.com

module.exports =

  rootView:
    location:"homepage#index"

  preloads: [
    {
      id: "index"
      location: "homepage#index"
    }
  ]

