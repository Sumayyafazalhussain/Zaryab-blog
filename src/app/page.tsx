import Navbar from "@/components/Navbar";
import AuthoreCard from "@/components/AuthoreCard";
import React from "react";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";

import CommentSection from "@/components/CommentSection";
import Feature from "@/components/Feature";

export default function Home() {
  return (
   <div>
 
<Navbar />
<Feature />
<Mega />
<AuthoreCard />






<CommentSection postId={""} />

<br />
<Footer />
   </div>
  );
}
