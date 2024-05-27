import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../Home.css';
import Footer from '../FootNote.js';
import { onAuthChange } from "../../firebase";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthChange(setUser);
  }, []);

  return (
    <>
      <div className="home-container">
        {user && (
          <Link to="/createpost">
            <button className="create-post-button">+</button>
          </Link>
        )}
        <h1>This is Mr. Poot's classroom:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis faucibus tellus, at suscipit sem tincidunt sed. Nunc justo lectus, vulputate eu tempor in, tincidunt in odio. Mauris in pellentesque urna. Quisque porta imperdiet fermentum. Sed fringilla feugiat interdum. Aliquam et magna mollis, egestas magna at, semper felis. Sed id vehicula leo, et vehicula enim. Donec et pharetra nisi. Sed id iaculis elit, nec varius quam. Vestibulum scelerisque, mauris a vulputate dictum, erat sapien elementum elit, non volutpat elit lacus sed purus. Nunc commodo laoreet ipsum ut finibus.
          
          Suspendisse neque est, mollis ac tortor id, aliquet maximus eros. Maecenas at lectus sed orci aliquam eleifend bibendum eu diam. Donec at odio nec sem sagittis condimentum at ullamcorper elit. Maecenas dictum velit ut tempor sodales. Sed ligula felis, viverra quis sagittis id, efficitur nec lorem. In eleifend, lectus eget hendrerit tempor, felis nulla gravida libero, ut euismod leo sem at nibh. Nam imperdiet semper augue id sodales. Pellentesque ultricies magna ante, sed tristique felis rutrum tristique. Curabitur quis aliquam nibh. Ut convallis vulputate ultrices. Vivamus non ligula tristique nisl semper lobortis ut luctus felis. Nunc sodales tempus nulla, eget cursus felis hendrerit a. Ut dignissim odio ut purus mollis, quis eleifend neque ullamcorper.

          Suspendisse quis nunc eget massa facilisis accumsan. Sed ultrices mi in enim fringilla, tristique feugiat nisl bibendum. Curabitur a tempus diam. Donec pellentesque sapien eu luctus aliquam. Nunc volutpat porta turpis, interdum rhoncus sem tempor sed. Maecenas lacinia lacus vitae tortor sagittis, ac ultrices purus consequat. In hac habitasse platea dictumst. Vivamus enim eros, tincidunt sed pulvinar ac, porta id justo. In hac habitasse platea dictumst.

          Fusce odio velit, molestie quis dapibus a, elementum at ante. Curabitur sollicitudin augue et enim porttitor, in fringilla ipsum efficitur. Curabitur a sollicitudin ligula, lacinia dapibus erat. Fusce iaculis maximus nisl. Sed ultrices, erat sed porta efficitur, nibh urna feugiat nunc, a efficitur nunc mi vitae leo. Maecenas a massa mollis, porta mauris sit amet, fermentum massa. Mauris mattis laoreet mauris eget bibendum. Mauris fermentum, erat et volutpat mattis, purus enim ultricies eros, vel commodo justo diam vitae sem. Sed placerat est at dictum accumsan. Curabitur sagittis consectetur nisl nec imperdiet. Donec ultricies a tortor tincidunt scelerisque. Quisque ultrices urna arcu.

          Quisque ac metus vitae arcu sagittis aliquam sed ut lacus. Nulla cursus ex id lectus vestibulum accumsan. In sed sem dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus lacinia, quam mattis fringilla blandit, diam nibh vehicula nunc, nec placerat ex sem vitae est. Proin molestie felis nec sem accumsan, in rutrum lorem sollicitudin. Suspendisse scelerisque orci felis, eget fringilla lorem cursus eget. Maecenas vel magna nulla. Suspendisse risus lectus, euismod sed condimentum facilisis, ultricies nec sem. Suspendisse accumsan est vitae sagittis ullamcorper. Aliquam lectus mauris, posuere et lobortis quis, interdum ut ex. Suspendisse nisi ipsum, pellentesque ut risus eu, accumsan vestibulum sapien. Curabitur sit amet sapien lobortis, gravida enim et, pulvinar leo. Donec at auctor magna, non bibendum elit. Vivamus ut diam in nibh venenatis sodales.

          Vivamus venenatis metus ac pulvinar mattis. Vestibulum pharetra est fringilla ligula hendrerit pulvinar. Morbi sit amet augue vel sem volutpat faucibus in eget nunc. In aliquet ultrices pellentesque. Nunc tincidunt enim id felis tincidunt, et venenatis arcu elementum. In dignissim libero et enim pellentesque consectetur. Nullam pellentesque, nisi eu vulputate mattis, dui massa ultrices nisl, nec rhoncus lorem turpis sagittis erat. Etiam turpis orci, volutpat vel urna ut, mollis ornare leo. Nulla quis rutrum tortor.

          Donec posuere nunc convallis faucibus tincidunt. Sed semper augue facilisis gravida pharetra. Mauris imperdiet rutrum odio quis laoreet. Vivamus volutpat convallis justo, feugiat tempor sem convallis et. Aenean vel eros quis massa fermentum aliquet. Nam ante augue, ornare vitae ornare vel, lacinia eget magna. Ut mollis vehicula sollicitudin. Donec viverra sagittis felis at ornare. Sed tempus pharetra ligula, ac varius quam ullamcorper vitae. Integer consectetur mauris nec leo sagittis vulputate. Phasellus dignissim lectus quam, et fringilla nulla facilisis vitae. Curabitur egestas viverra purus, mattis luctus orci rutrum in. Sed at mattis est. Quisque non odio id lacus consectetur ullamcorper sed eu dolor. Mauris in metus sit amet turpis euismod tempus in ac elit.
        </p>
        <Footer />
      </div>
    </>
  );
}

export default Home;

