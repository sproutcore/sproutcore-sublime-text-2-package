import sublime, sublime_plugin, sys, re

class SproutCoreListener(sublime_plugin.EventListener):
  def on_post_save(self, view):

    # don't do anything if it's not a JS file
    if not re.match(r'.+\.js$', view.file_name(), re.I):
        return None

    # get the "use_provided_jshintrc" setting to determine the build command variant

    s = sublime.load_settings("SproutCore Snippets and JSHint Integration.sublime-settings")

    variant_name = "default" if s.get("use_provided_jshintrc") else "custom"

    view.window().run_command('build', {"variant": variant_name})