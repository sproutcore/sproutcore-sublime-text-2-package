import sublime, sublime_plugin

class SproutCoreCommand(sublime_plugin.WindowCommand):
  def run(self):
    self.window.run_command('set_build_system', {
      'file': 'Packages/SproutCore Snippets and JSHint Integration/SproutCore.sublime-build'
    })
    self.window.run_command('build')
