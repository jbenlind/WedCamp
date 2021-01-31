'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        venueId: 1,
        title: "Best Venue Ever!!",
        body: "This venue was exactly what we were looking for. Everything was ready for us, and we did not have to worry about anything. The weather was perfect and the trees were at the perfect color. The host had set everything up so that all we had to do was show up and enjoy ourselves, and it was perfect.",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        venueId: 1,
        title: "Great fun",
        body: "This was a GORGEOUS venue with loads of natural light and beautiful high ceilings. Everything was so clean and perfect. The neutral colors are fantastic and just go with everything. Our contact person was very helpful and prompt, and there are lots of decorations available for your use. It was so nice not having to purchase a bunch of things we will never use again. We would definitely recommend!",
        rating: 8,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        venueId: 1,
        title: "Fantastic time",
        body: "Everyone was great to work with. The whole wedding turned out just as I had hoped and planned it would be. Everyone was professional throughout the evening and the space was so lovely. I highly recommending having a wedding/event there.",
        rating: 9,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        venueId: 2,
        title: "Great",
        body: "Beautiful place to have any event at!!.",
        rating: 7,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 2,
        title: "Wonderful!",
        body: "We had so many comments on what a great venue this was for our daughter's wedding reception. The space was exactly what she wanted, with the brick interior and furnishings. Erica was a pleasure to work with. Prices were clear and concise from the beginning, making it easy to work into our budget.",
        rating: 8,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 2,
        title: "Winter Wedding",
        body: "We married in late December, when the coffee shop was still decked out for the holidays. All of our guests raves about how lovely the venue was...and we barely decorated at all. With its reclaimed wood tables able fairy lights, Anodyne was the perfect reception venue for our wedding of 65 guests. Everyone loved the option of fancy coffee drinks and drinkers were impressed by the wide selection of beers and wines. With Erica coordinating, we truly had the best wedding possible.",
        rating: 7,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 3,
        title: "Very nice",
        body: "Kelsey was great to work with for our room block! She was very responsive and helpful. The service at the was impeccable. The bell stand was extremely helpful.",
        rating: 9,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        venueId: 3,
        title: "Simply perfect",
        body: "Maggie (event manager/coordinator) did a fantastic job with our wedding. The day was completely stress free and just the way I had planned. She and her team set-up my centerpieces, guest book, gift table, and program table beautifully and without charging extra. The team did a great job making sure guests needs were meet throughout the night. Kids at the reception were served earlier than the adults making their parents very pleased with service. Service was quick and accurate. The food was exceptional. Many of our guests complimented us on the outstanding food. Overall, the team did an amazing job with our wedding.",
        rating: 9,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        venueId: 3,
        title: "This day was perfect",
        body: "Absolutely Amazing. This was the best reception venue around. A beautiful location with incredibly friendly staff, great food, and good value. I can never express how amazing they were to work with. The wedding planner (Maggie) was absolutely fantastic. Everyone catered to our guests. It was a beautiful wedding and we have them to thank.",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 4,
        title: "Great",
        body: "Maggie was awesome. She was flexible and professional.",
        rating: 7,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 4,
        title: "Time of our lives",
        body: "Absolutely amazing!!!!!!!!!! The rooms are beautiful, the service was wonderful, the food was magnificent. We received so many comments from guests that that was the best steak or chicken they have ever had. It is a bit pricey, but completely worth it!",
        rating: 8,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        venueId: 4,
        title: "This is the one",
        body: "I loved having my ceremony and reception here! Almost every guest commented on how it was the best wedding they had ever been to. The wait staff was so professional and accommodating. The event planner, Maggie, was organized and thoughtful. We had the rehearsal dinner at the Chophouse which was also phenomenal.",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 5,
        title: "Almost everything",
        body: "Everyone there was very friendly and professional. I highly recommend that you have your reception there. Out of the whole night only two things happen that I wasn't happy about. The first was that they brought the late night snacks in at 11:30 (they were suppose to be out till 12:00). However, after I spoke with them they brought them back out. Basically I think they were just trying to pack up early. The second thing that happened was that they gave our wedding suite away by accident. They had a room for us but it wasn't the suite we had reserved. I wasn't too happy about that, but luckily we had a place to sleep. And they gave us another night stay for free because of it, so we are going to go back and celebrate our 1 year anniversary there. Besides those two things, everything was perfect! :)",
        rating: 6,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 5,
        title: "Not what I expected",
        body: "Beautiful rooms-- but unfortunately, terrible service. I was passed around to three different wedding coordinators. I was a young bride and felt they didn't take my wedding seriously. They rarely returned my phone calls-- so in the end, all communication went through my husband. For the price you pay--service should be exceptional.",
        rating: 1,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        venueId: 5,
        title: "We are excited",
        body: "Wow. Tom and Juan are such a find! The place, the professionalism, the impeccable décor, it can't get better than this. We are so excited to get married here in July of 2022!!!",
        rating: 10,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 6,
        title: "The most magical place for our dream wedding!",
        body: "I literally have nothing bad or negative to say about The Farm. Every single one of our guests have raved about the how beautiful and unique the venue was! Everything was picture perfect for our wedding day. Tom & Juan are the nicest guys we've ever met! From the first tour, to the end of our wedding. They have been an absolute joy to work with, and I hope to see them in the future! They think of just about everything you could ever need and their attention to detail is why we fell in love with our venue. They were so patient when I changed my mind 100 times and they did everything with a smile. I wish I could go back every year & relive the best day! Tom, Juan, and Carly, thank you so much for all you did to help make our dream wedding a reality! We will cherish our memories, and our thank you gift every day, Thank you!!",
        rating: 9,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 6,
        title: "Our Modern Day Fairytale",
        body: "Dom and Cam have literally thought of everything and truly created the most beautiful and romantic wedding venue we have ever seen. We knew the minute we stepped on the property that this had to be where we began our married life together. We cannot say enough about Tom and Juan and how accommodating they were throughout the entire process! To us, life is about the little details and we certainly took them all in at The Farm at Dover. Thank you from the bottom of our hearts for all the love and energy you have put into your venue and into our special day! Our day was simply perfect",
        rating: 6,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        venueId: 7,
        title: "Couldn't Have been Happier!!!!",
        body: "From the moment we arrived at the venue we knew it would be mesmerizing for the one and only event of our lives. Both my husband and I were so overwhelmed by the professionalism and exquisite detail that Tom (the owner) and his staff took when ensuring that our day was perfect. Tom made sure I had everything I needed to get ready in the picturesque Victorian house. My husband happily hung out with his groomsmen in the granary which is the ultimate 'Men's Den'. After speaking with Tom, he gave me some recommendations from everything from the caterer to the DJ based on what he knew I wanted and those vendors were also excellent. Both my husband and I have been in constant awe since the wedding because friends and family had said that it may be one of the most beautiful wedding venues they've ever been to. It truly was a fairytale wedding! Thank you, Tom and Juan!",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 7,
        title: "Rustic Wonderland",
        body: "he owners Tom and Juan are fantastic and did everything possible to ensure our wedding was the best day of our lives. From the very beginning, they were so nice and accommodating, and it was clear how meticulously they care for every last detail on the property. We were very thankful that they even thought to spray for mosquitos! The barn and surrounding grounds are absolutely breathtaking, and we especially enjoyed the many unique places on the grounds for photographs and for our guests to explore! The grooms quarters and the bride’s house were both perfect to escape the commotion and to freshen up in advance of our ceremony (also great for pictures). The lower level of the barn was set up for a rustic cocktail hour and the 2nd floor worked beautifully for reception and dancing. We were worried it would get hot inside the barn during the summer but the large barn windows allowed a very refreshing breeze to come in. We would highly recommend Farm at Dover for any couple looking to get married in a gorgeous rustic location.",
        rating: 10,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 7,
        title: "Pitch perfect",
        body: "We got married at the farm last weekend and it was absolutely magical. Tom and Juan are very sweet, professional and easy to work with. The place is just immaculately taken care of and gorgeous! I highly recommend checking this place out! The memories of this beautiful farm with stay with us forever.",
        rating: 8,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        venueId: 8,
        title: "Simply sweet",
        body: "Not much to say to describe this venue besides wow. Our day was absolutely perfect thanks to Bob and Luan, and the gorgeous scenery that surrounding our family and friends. If you are lucky enough to book this place, you won't regret it.",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        venueId: 8,
        title: "Great Historic Venue",
        body: "We loved how gorgeous the hall is. Because of the historic beauty we did not have to decorate at all!! One less thing for us to fret about and it looked better than we could have ever imagined!! The staff was more than accommodating and very friendly; by the end of the night they felt more like guests!! It was perfect!",
        rating: 6,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 8,
        title: "Please get married here!",
        body: "We could not have been happier! Hosting our wedding and reception in the Great Hall was perfect for how we envisioned our wedding. And the Event Coordinator, Kimberly, is phenomenal to work with. We've only beend married 3 weeks, but have already talked about throwing a big anniversary party there for year 5 or 10. :)",
        rating: 8,
        verifiedBooking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        venueId: 9,
        title: "Best Venue ",
        body: "I cannot express how much we LOVED having our wedding at Best Place! Kim was incredible to work with and was so flexible with all of our requests. We are still getting compliments on the unique venue and amazing bartenders, etc! We would highly, highly, highly recommend Best Place to anyone!",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 9,
        title: "Could not be happier",
        body: "This venue was exactly what we were looking for. Everything was ready for us, and we did not have to worry about anything. The weather was perfect and the trees were at the perfect color. The host had set everything up so that all we had to do was show up and enjoy ourselves, and it was perfect.",
        rating: 9,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        venueId: 9,
        title: "Best Venue Ever!!",
        body: "This venue was exactly what we were looking for. Everything was ready for us, and we did not have to worry about anything. The weather was perfect and the trees were at the perfect color. The host had set everything up so that all we had to do was show up and enjoy ourselves, and it was perfect.",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        venueId: 10,
        title: "Fantastic service",
        body: "They are really professional, and super helpful with accommodations.",
        rating: 7,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 10,
        title: "We wanted more",
        body: "Not as advertised",
        rating: 5,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        venueId: 10,
        title: "Not for everyone",
        body: "We did not enjoy the venue.",
        rating: 2,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 11,
        title: "Good not great",
        body: "We had fun, but for the price, it was not worth it.",
        rating: 6,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 11,
        title: "Omg yes!",
        body: "Michael is like your own personal wedding planner! He was very responsive and kept us on point for what we needed to accomplish! The space is beautiful, especially the outdoor patio space! I'd highly recommend!",
        rating: 7,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        venueId: 11,
        title: "Thank you Micheal",
        body: "Micheal is very responsive and professional. He is willing to do anything for your wedding. You can tell he loves his job.",
        rating: 9,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        venueId: 12,
        title: "Pick me!",
        body: "Steph is amazing to work with! Had my wedding 10.8.16 and it was perfect! The staff was awesome and food was really really good! I have no complaints at all!",
        rating: 8,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        venueId: 12,
        title: "Best Venue ever",
        body: "Excellent venue for wedding with 80-100 guest we really enjoyed ourselves the staff was friendly and courteous. The atmosphere is great for a wedding with the outside patio fire pit and hotel bar area were stylish for pictures and socializing. I recommend for location, food, budget, and atmosphere top rating.",
        rating: 9,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        venueId: 12,
        title: "Amazing experience",
        body: "Stephanie was incredible to work with from day 1. She is very good at communication and the day of the wedding she was spectacular. She made sure all of our last minute change were done quickly and anytime we needed anything, she would be there when we turned around to help. The space is incredible and having the patio on the river was a huge hit! We highly recommend getting married or having an event here! Ask for Stephanie!",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },



    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
