import React from 'react';
import { SSRFC } from 'typings';
import { sleep } from '@/utils';

interface PageHashProps {
  title: string;
  content: string;
  isServer?: boolean;
}

const PageHash: SSRFC<PageHashProps> = props => {
  console.log('PageHash::render');
  console.log('isServer:', props.isServer);

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <code>isServer: {props.isServer?.toString()}</code>
      <h1 id="p1">
        <a href="#p1">#</a>Paragraph 1
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas tortor a nulla
        rutrum, nec ultrices massa porttitor. Ut et gravida dui, non tincidunt libero. Nullam in
        ullamcorper urna. Aenean congue ex vitae urna hendrerit, id consectetur nulla tincidunt.
        Quisque bibendum nisl a mauris fringilla luctus. Integer ante leo, tincidunt hendrerit arcu
        et, ullamcorper varius est. Mauris a facilisis massa. Fusce fringilla ipsum quis commodo
        fermentum. Suspendisse ac risus aliquam, maximus mauris et, pulvinar metus. Suspendisse
        potenti. Suspendisse pulvinar dictum erat ut tincidunt. Curabitur semper porta dapibus. Nam
        mauris tellus, vestibulum sed vehicula eget, efficitur nec turpis. Proin interdum turpis nec
        lorem suscipit rhoncus.
      </p>
      <h1 id="p2">
        <a href="#p2">#</a>Paragraph 2
      </h1>

      <p>
        Fusce volutpat maximus diam, vitae egestas lacus posuere eu. In hac habitasse platea
        dictumst. Duis a risus at turpis varius pharetra. Sed scelerisque malesuada turpis eget
        ornare. Nulla malesuada dolor eget nibh tincidunt interdum. Donec vestibulum ornare magna
        sit amet posuere. In id aliquet lectus, ut facilisis elit. Nullam pharetra sagittis euismod.
        Nullam ligula tellus, blandit eu mi tristique, placerat accumsan ipsum. Mauris a nulla eget
        dolor efficitur tincidunt eu nec nulla. Sed vel mauris nec turpis dapibus vestibulum nec id
        felis.
      </p>
      <h1 id="p3">
        <a href="#p3">#</a>Paragraph 3
      </h1>

      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse consequat
        fermentum placerat. Donec tortor nibh, viverra vestibulum commodo ac, ullamcorper a libero.
        Aliquam turpis nibh, sagittis at condimentum ut, auctor pulvinar sapien. Nullam iaculis nec
        nunc eu viverra. Mauris rhoncus augue sit amet rhoncus cursus. Nam eget odio ac odio cursus
        mollis. Donec magna ex, congue id turpis bibendum, euismod scelerisque nibh. Vestibulum nec
        enim augue. Aenean volutpat nisi ac eleifend congue. Aliquam efficitur vel libero eget
        hendrerit. Sed bibendum lacinia dui, ac porta elit iaculis nec.
      </p>
      <h1 id="p4">
        <a href="#p4">#</a>Paragraph 4
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sagittis justo. Aliquam
        auctor nunc id bibendum pretium. Morbi condimentum mollis aliquam. Suspendisse gravida
        mauris eu consequat tristique. Aenean at condimentum nulla. Fusce luctus arcu augue, in
        ultrices risus vehicula ac. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec ac tincidunt augue. Curabitur a urna ante. Aenean porta dolor varius, aliquet est nec,
        interdum lorem. Donec efficitur pretium metus ultricies sagittis. Ut interdum facilisis
        ligula id rhoncus.
      </p>
      <h1 id="p5">
        <a href="#p5">#</a>Paragraph 5
      </h1>

      <p>
        Donec in tincidunt turpis. Mauris sem neque, vulputate id turpis eu, venenatis fringilla
        eros. Mauris eu odio nisl. Donec congue tristique erat, a varius elit auctor sit amet. In ac
        elit vel arcu venenatis feugiat. Vivamus bibendum ex sed elit viverra, et ullamcorper leo
        vestibulum. Proin tempor augue eget ligula rutrum venenatis. Mauris sodales ligula id enim
        accumsan, vitae aliquet ex porta. Ut nec blandit sapien. Fusce consectetur sed est et
        venenatis. Aliquam erat volutpat. Sed vel metus vel est molestie efficitur et vel augue. Ut
        bibendum sem eu dui malesuada, condimentum venenatis neque consectetur. Nam imperdiet
        blandit eros. Praesent cursus finibus ante, ac bibendum ante efficitur id.
      </p>
    </div>
  );
};

PageHash.getInitialProps = async params => {
  console.log('PageHash::getInitialProps');
  console.log('isServer:', params.isServer);
  await sleep(1000);
  return { title: 'Page with hash', content: 'This is a page with hash links', isServer: params.isServer };
};

export default PageHash;
