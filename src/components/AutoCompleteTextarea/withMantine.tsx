import React from 'react';
import { Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import type { Editor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';

const withMantine = (Wrappee: React.ComponentType<{ editor: Editor | null }>) => (
  props: Record<string, unknown>,
) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
  });

  return <Wrappee editor={editor} {...props} />;
};

export default withMantine;
