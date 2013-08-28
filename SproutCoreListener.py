import sublime, sublime_plugin, sys

class SproutCoreListener(sublime_plugin.EventListener):
  def on_post_save(self, view):
    s = sublime.load_settings("SproutCore Snippets and JSHint Integration.sublime-settings")

    variant_name = "default" if s.get("use_provided_jshintrc") else "custom"
    
    sys.stdout.write("error: %s\n" % variant_name)
    
    view.window().run_command('build', {"variant": variant_name})