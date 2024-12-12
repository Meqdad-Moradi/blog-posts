import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog-posts';

  // TinyMCE Configuration
  public tinymceConfig: any = {
    base_url: '',
    suffix: '.min',
    // language: 'de',
    // language_url: '/tinymce/langs/de.js',
    plugins: ['lists emoticons autosave paste'],
    // Editor appearance config
    toolbar: 'undo | bold italic | bullist numlist | removeformat | emoticons',
    menubar: false,
    statusbar: false,
    branding: false,
    inline: true,
    fixed_toolbar_container: '#toolbar',
    // AutoSave config
    autosave_restore_when_empty: true,
    autosave_interval: '30s',
    autosave_ask_before_unload: false,
    autosave_prefix: 'editor-autosave-{path}{query}-{id}-',
    autosave_retention: '10m',
    // Content formatting config
    forced_root_block: true,
    valid_elements: 'strong,em,ul,ol,li,u,br,p',
    entity_encoding: 'raw',
    entities: '160,nbsp,38,amp,60,lt,62,gt',
    formats: {
      underline: { inline: 'u', exact: true },
    },
    emoticons_append: {
      // Override the keywords of this default emoji so "-D" and "-d" is ignored by the autocompleter
      children_crossing: {
        keywords: ['school', 'warning', 'danger', 'sign', 'driving'],
        char: '\ud83d\udeb8',
        fitzpatrick_scale: false,
        category: 'symbols',
      },
    },
    setup: (editor: any) => {
      editor.on('init', (e: any) => {
        // YI 19.11.2020 AA-977 bug on ios:
        //  when enter is klicked / pressed then the caret went below the visible text area,
        //  the scrollbar doesn't follow the carets position, thus we update manually the scroll position
        //  https://stackoverflow.com/questions/48802100/tinymce-scroll-to-caret-position-on-enter
        //  Update EN 10.12.2020
        //  scrollIntoViewIfNeeded() works on iOs and Safari, other Browsers work well with scrollIntoView()
        editor.on('keyup', (event: any) => {
          if (event.keyCode === 13) {
            // if (isSafariOrIOS()) {
            //   editor.selection.getNode().scrollIntoViewIfNeeded();
            // } else {
            //   editor.selection.getNode().scrollIntoView(false);
            // }
          }
        });
        // YI Ende

        // // show placeholder when there is no content
        // if (!e.target.getContent().length) {
        //   document.getElementById('placeholder').classList.add('show');
        // } else {
        //   document.getElementById('placeholder').classList.remove('show');
        // }

        // Needed to make the toolbar appear on init.
        editor.fire('focus');
        editor.fire('blur');
      });
      editor.on('focus', (e: any) => {
        // hide placeholder always on focus
        // document.getElementById('placeholder').classList.remove('show');
      });
      editor.on('blur', (e: any) => {
        // show placeholder when there is no content
        // if (!e.target.getContent().length) {
        //   document.getElementById('placeholder').classList.add('show');
        // } else {
        //   document.getElementById('placeholder').classList.remove('show');
        // }
      });
      editor.on('RestoreDraft', (e: any) => {
        // // hide placeholder when there is no content
        // if (e.target.getContent().length) {
        //   document.getElementById('placeholder').classList.remove('show');
        // }
      });
    },
  };
}
