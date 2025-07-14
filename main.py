# main.py
from kivy.app import App
from kivy.uix.label import Label

class RitualApp(App):
    def build(self):
        return Label(text='🌀 Welcome to RitualisticismApp – The Symbolic OS')

if __name__ == '__main__':
    RitualApp().run()
