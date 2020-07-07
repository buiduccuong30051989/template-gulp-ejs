const Project = {
  Init: function() {
    this.test()
  },

  test: function() {
    console.log('test')
  }
}

$(document).ready(function() {
  Project.Init()
})
