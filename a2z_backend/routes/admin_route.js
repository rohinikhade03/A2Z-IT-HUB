var express = require("express");
var router = express.Router();
var exe = require("./../conn");

//Main Home Page 
router.get("/",async function(req,res){
    var home_part1_list = await exe(`SELECT * FROM home_part1`);
    var obj = {"home_part1_list":home_part1_list};
    res.render("admin/manage_home.ejs");
});

//Home Part1 started
//CREATE TABLE home_part1(part1_id INT PRIMARY KEY AUTO_INCREMENT,aboutus_title TEXT,aboutus_sub_title TEXT,aboutus_description TEXT,vision_title TEXT,vision_description TEXT,mission_title TEXT,mission_description TEXT,mission_description1 TEXT,mission_description2 TEXT,mission_description3 TEXT,mission_img TEXT);

router.get("/manage_Home_part1",async function(req,res){
    var home_part1_list = await exe(`SELECT * FROM home_part1`);
    var obj = {"home_part1_list":home_part1_list};
    res.render("admin/manage_Home_part1.ejs",obj);
});

router.post("/save_Home_part1",async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.mission_img.mv("public/uploads/home_part1/"+file_name);
    var sql = `INSERT INTO home_part1(aboutus_title,aboutus_sub_title,aboutus_description,vision_title,vision_description,mission_title,mission_description,mission_description1,mission_description2,mission_description3,mission_img) VALUES ('${d.aboutus_title}','${d.aboutus_sub_title}','${d.aboutus_description}','${d.vision_title}','${d.vision_description}','${d.mission_title}','${d.mission_description}','${d.mission_description1}','${d.mission_description2}','${d.mission_description3}','${file_name}')`;
    var result = await exe(sql);
    res.redirect("/admin/manage_Home_part1");
    // res.send(req.body);
});

router.get("/edit_Home_part1/:id",async function(req,res){
    var Home_part1_info = await exe(`SELECT * FROM home_part1 WHERE part1_id = '${req.params.id}'`);
    var obj = {"Home_part1_info":Home_part1_info};
    res.render("admin/edit_Home_part1.ejs",obj);
});

router.post("/update_home_part1",async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.mission_img.mv("public/uploads/home_part1/"+file_name);
    var sql =  `UPDATE home_part1 SET aboutus_title ='${d.aboutus_title}',aboutus_title ='${d.aboutus_title}',aboutus_sub_title ='${d.aboutus_sub_title}',aboutus_description ='${d.aboutus_description}',vision_title ='${d.vision_title}',vision_description ='${d.vision_description}',mission_title ='${d.mission_title}',mission_description ='${d.mission_description}',mission_description1 ='${d.mission_description1}',mission_description2 ='${d.mission_description2}',mission_description3 ='${d.mission_description3}',mission_img ='${file_name}' WHERE part1_id = '${d.part1_id}'`;
    var result = await exe(sql);
    res.redirect("/admin/manage_Home_part1");
});

router.get("/delete_home_part1/:id",async function(req,res){
    var sql = `DELETE FROM home_part1 WHERE part1_id = '${req.params.id}'`;
    var result = await exe(sql);
    res.redirect("/admin/manage_Home_part1");
});

router.get('/home_part1_api',async function(req,res){
    var Home_part1 = await exe(`SELECT * FROM home_part1`);
    res.send(Home_part1);
});
//Home Part1 End
//Home Part 2 started
//CREATE TABLE home_part2(part2_id INT PRIMARY KEY AUTO_INCREMENT,feature_title TEXT,feature_name1 TEXT,feature_img1 TEXT,feature_name2 TEXT,feature_img2 TEXT,feature_name3 TEXT,feature_img3 TEXT,feature_name4 TEXT,feature_img4 TEXT,feature_name5 TEXT,feature_img5 TEXT,feature_name6 TEXT,feature_img6 TEXT,program_title TEXT,program_name1 TEXT,program_info1 TEXT, program_icon1 TEXT,program_name2 TEXT,program_info2 TEXT, program_icon2 TEXT,program_name3 TEXT,program_info3 TEXT, program_icon3 TEXT);

router.get("/manage_Home_part2",async function(req,res){
    var home_part2_list = await exe(`SELECT * FROM home_part2`);
    var obj = {"home_part2_list":home_part2_list};
    res.render("admin/manage_Home_part2.ejs",obj);
});

router.post("/save_Home_part2",async function(req,res){
    var d = req.body;
    var file_name1 = new Date().getTime()+".png";
    req.files.feature_img1.mv("public/uploads/home_part2/"+file_name1);
    var file_name2 = new Date().getTime()+".png";
    req.files.feature_img2.mv("public/uploads/home_part2/"+file_name2);
    var file_name3 = new Date().getTime()+".png";
    req.files.feature_img3.mv("public/uploads/home_part2/"+file_name3);
    var file_name4 = new Date().getTime()+".png";
    req.files.feature_img4.mv("public/uploads/home_part2/"+file_name4);
    var file_name5 = new Date().getTime()+".png";
    req.files.feature_img5.mv("public/uploads/home_part2/"+file_name5);
    var file_name6 = new Date().getTime()+".png";
    req.files.feature_img6.mv("public/uploads/home_part2/"+file_name6);

    var sql = `INSERT INTO home_part2(feature_title,feature_name1,feature_img1,feature_name2,feature_img2,feature_name3,feature_img3,feature_name4,feature_img4,feature_name5,feature_img5,feature_name6,feature_img6,program_title,program_name1,program_info1,program_icon1,program_name2,program_info2,program_icon2,program_name3,program_info3,program_icon3) VALUES ('${d.feature_title}','${d.feature_name1}','${file_name1}','${d.feature_name2}','${file_name2}','${d.feature_name3}','${file_name3}','${d.feature_name4}','${file_name4}','${d.feature_name5}','${file_name5}','${d.feature_name6}','${file_name6}','${d.program_title}','${d.program_name1}','${d.program_info1}','${d.program_icon1}','${d.program_name2}','${d.program_info2}','${d.program_icon2}','${d.program_name3}','${d.program_info3}','${d.program_icon3}') `;
    var result = await exe(sql);
    res.redirect("/admin/manage_Home_part2");
});
router.get("/edit_Home_part2/:id",async function(req,res){
    var Home_part2_info = await exe(`SELECT * FROM home_part2 WHERE part2_id = '${req.params.id}'`);
    var obj = {"Home_part2_info":Home_part2_info};
    res.render("admin/edit_Home_part2.ejs",obj);
});
router.post("/update_home_part2",async function(req,res){
    var d = req.body;
    var file_name1 = new Date().getTime()+".png";
    req.files.feature_img1.mv("public/uploads/home_part2/"+file_name1);
    var file_name2 = new Date().getTime()+".png";
    req.files.feature_img2.mv("public/uploads/home_part2/"+file_name2);
    var file_name3 = new Date().getTime()+".png";
    req.files.feature_img3.mv("public/uploads/home_part2/"+file_name3);
    var file_name4 = new Date().getTime()+".png";
    req.files.feature_img4.mv("public/uploads/home_part2/"+file_name4);
    var file_name5 = new Date().getTime()+".png";
    req.files.feature_img5.mv("public/uploads/home_part2/"+file_name5);
    var file_name6 = new Date().getTime()+".png";
    req.files.feature_img6.mv("public/uploads/home_part2/"+file_name6);
  
    var sql = ` UPDATE home_part2 SET feature_title = '${d.feature_title}',
    feature_name1 = '${d.feature_name1}',feature_img1 = '${file_name1}',
    feature_name2 = '${d.feature_name2}',feature_img2 = '${file_name2}', 
    feature_name3 = '${d.feature_name3}',feature_img3 = '${file_name3}',
    feature_name4 = '${d.feature_name4}',feature_img4 = '${file_name4}',
    feature_name5 = '${d.feature_name5}',feature_img5 = '${file_name5}',
    feature_name6 = '${d.feature_name6}',feature_img6 = '${file_name6}',
    
    program_title = '${d.program_title}',program_name1 = '${d.program_name1}',program_info1 = '${d.program_info1}',program_icon1 = '${d.program_icon1}',
    program_name2 = '${d.program_name2}',program_info2 = '${d.program_info2}',program_icon2 = '${d.program_icon2}',
    program_name3 = '${d.program_name3}',program_info3 = '${d.program_info3}',program_icon3 = '${d.program_icon3}'
    WHERE part2_id = '${d.part2_id}'`;

    var result = await exe(sql);
    res.redirect("/admin/manage_Home_part2");
});
router.get("/delete_home_part2/:id",async function(req,res){
    var sql = `DELETE FROM home_part2 WHERE part2_id = '${req.params.id}'`;
    var result = await exe(sql);
    res.redirect("/admin/manage_Home_part2");
});

router.get('/home_part2_api',async function(req,res){
    var Home_part2 = await exe(`SELECT * FROM home_part2`);
    res.send(Home_part2);
});
//Home Part2 End
//About Started
//CREATE TABLE about(about_id INT PRIMARY KEY AUTO_INCREMENT,wdwd_title TEXT,wdwd_description TEXT,wdwd_icon TEXT,wdwd_sub_title TEXT,wdwd_info TEXT, values_title TEXT,values_sub_title TEXT, values_info TEXT,  values_img TEXT );

router.get("/manage_about", async function(req,res){
    var about_list = await exe(`SELECT * FROM about`);
    var obj = {"about_list":about_list};
    res.render("admin/manage_about.ejs",obj);
});
router.post("/save_about",async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.values_img.mv("public/uploads/about/"+file_name);
    var sql = `INSERT INTO about(wdwd_title,wdwd_description,wdwd_icon,wdwd_sub_title,wdwd_info, values_title,values_sub_title, values_info,  values_img) VALUES ('${d.wdwd_title}','${d.wdwd_description}','${d.wdwd_icon}','${d.wdwd_sub_title}','${d.wdwd_info}','${d.values_title}','${d.values_sub_title}','${d.values_info}','${file_name}')`;
    var result = await exe(sql);
    res.redirect("/admin/manage_about");
});
router.get("/edit_about/:id",async function(req,res){
    var about_info = await exe(`SELECT * FROM about WHERE about_id = '${req.params.id}'`);
    var obj = {"about_info":about_info};
    res.render("admin/edit_about.ejs",obj);
});
router.post("/update_about",async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.values_img.mv("public/uploads/about/"+file_name);
    var sql = `UPDATE about SET wdwd_title = '${d.wdwd_title}',wdwd_description = '${d.wdwd_description}',wdwd_icon = '${d.wdwd_icon}',wdwd_sub_title = '${d.wdwd_sub_title}',wdwd_info = '${d.wdwd_info}',values_title = '${d.values_title}',values_sub_title = '${d.values_sub_title}',values_info = '${d.values_info}',values_img = '${file_name}'  WHERE about_id = '${d.about_id}' `;
    var result = await exe(sql);
    res.redirect("/admin/manage_about");
});
router.get("/delete_about/:id",async function(req,res){
    var sql = `DELETE FROM about WHERE about_id = '${req.params.id}'`;
    var result = await exe(sql);
    res.redirect("/admin/manage_about");
});

router.get('/about_api',async function(req,res){
    var About = await exe(`SELECT * FROM about`);
    res.send(About);
});
//About  End
//Slider Started
//CREATE TABLE slider(slider_id INT PRIMARY KEY AUTO_INCREMENT,slider_title TEXT,slider_info TEXT,slider_btn TEXT, slider_btn_url TEXT,slider_img TEXT );
router.get("/manage_slider", async function(req,res){
    var slider_list = await exe(`SELECT * FROM slider`);
    var obj = {"slider_list":slider_list};
    res.render("admin/manage_slider.ejs",obj);
});
router.post("/save_slider",async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.slider_img.mv("public/uploads/slider/"+file_name);
    var sql = `INSERT INTO slider(slider_title,slider_info,slider_btn, slider_btn_url,slider_img) VALUES ('${d.slider_title}','${d.slider_info}','${d.slider_btn}','${d.slider_btn_url}','${file_name}')`;
    var result = await exe(sql);
    res.redirect("/admin/manage_slider");
});
router.get("/edit_slider/:id",async function(req,res){
    var slider_info = await exe(`SELECT * FROM slider WHERE slider_id = '${req.params.id}'`);
    var obj = {"slider_info":slider_info};
    res.render("admin/edit_slider.ejs",obj);
});
router.post("update_slider",async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.slider_img.mv("public/uploads/slider/"+file_name);
    var sql = `UPDATE slider SET slider_title = '${d.slider_title}',slider_info = '${d.slider_info}',slider_btn = '${d.slider_btn}', slider_btn_url = '${d.slider_btn_url}',slider_img = '${file_name}' WHERE slider_id = '${d.slider_id}' `;
});
router.get("/delete_slider/:id",async function(req,res){
    var sql = `DELETE FROM slider WHERE slider_id = '${req.params.id}'`;
    var result = await exe(sql);
    res.redirect("/admin/manage_slider");
});

router.get('/slider_api',async function(req,res){
    var Slider = await exe(`SELECT * FROM slider`);
    res.send(Slider);
});
//Parmeshwar

router.get('/batches', async (req, res) => {
    var sql = 'SELECT * FROM batch_cource';
    var batch_cource_data = await exe(sql);
    res.render("admin/batches.ejs",{"batch_cource_data":batch_cource_data})
})

router.get('/batchesapi', async (req, res) => {
    var sql = 'SELECT * FROM batch_cource';
    var batch_cource_data = await exe(sql);
    res.send(batch_cource_data)
})

// CREATE TABLE batch_cource (batch_cource_id INT PRIMARY KEY AUTO_INCREMENT, batch_cource_name VARCHAR(200),cource_duration VARCHAR(50),cource_time VARCHAR(50),cource_date VARCHAR(100))

router.post('/save_batch', async (req, res) => {
    var d = req.body;
    var sql = `INSERT INTO batch_cource (batch_cource_name,cource_duration,cource_time,cource_date) 
                VALUES ('${d.batch_cource_name}', '${d.cource_duration}', '${d.cource_time}', '${d.cource_date}')`;
    var data = await exe(sql);
    res.redirect("/admin/batches");
})

router.get('/delete_batch_cource/:id', async (req, res) => {
    var sql = `DELETE FROM batch_cource WHERE batch_cource_id = ${req.params.id}`;
    var data = await  exe(sql)
    res.redirect("/admin/batches");
});

router.get('/edit_batch_cource/:id', async (req,res) => {
    var sql = `SELECT * FROM batch_cource WHERE batch_cource_id = ${req.params.id}`;
    var data = await exe(sql)
    res.render('admin/edit_batch_cource.ejs',{"edit_cource_data":data[0]});
});

router.post('/update_batch_cource', async (req, res) => {
    var d = req.body;
    var sql = `UPDATE batch_cource SET 
               batch_cource_name = '${d.batch_cource_name}' , 
               cource_duration = '${d.cource_duration}',
               cource_time = '${d.cource_time}',
               cource_date = '${d.cource_date}' 
               WHERE batch_cource_id = '${d.batch_cource_id}' 
               `;
    var data = await exe(sql);
    res.redirect("/admin/batches");
});


router.get('/career_services', async (req, res) => {
    var service = await exe(`SELECT * FROM career_services`)
    res.render('admin/career_services.ejs',{"career_services_data":service});
})

router.get('/career_servicesapi', async (req, res) => {
    var service = await exe(`SELECT * FROM career_services`)
    res.send(service)
})


// CREATE TABLE career_services (career_services_id INT PRIMARY KEY AUTO_INCREMENT,career_service_logo VARCHAR(100),career_service_details VARCHAR(100),service_icon TEXT,service_title TEXT) 

router.post('/save_carrer_service', async (req, res) => {
    var d = req.body;
    var sql = `INSERT INTO career_services (career_service_logo,career_service_details,service_icon,service_title)
               VALUES ('${d.career_service_logo}','${d.career_service_details}','${d.service_icon}','${d.service_title}')`;
    var data = await exe(sql)
    res.redirect("/admin/career_services");
});

router.get('/delete_career_service/:id', async (req, res) => {
    var sql = `DELETE FROM career_services WHERE career_services_id = '${req.params.id}'`
    var data = await exe(sql)
    res.redirect("/admin/career_services");
});

router.get('/edit_career_service/:id', async (req, res) => {
    var sql =  `SELECT * FROM career_services WHERE career_services_id = '${req.params.id}'`
    var edit_carrer_service_data = await exe(sql);
    res.render('admin/edit_career_service.ejs',{"edit_carrer_service_data":edit_carrer_service_data[0]})
});

router.post('/update_carrer_service', async (req, res) =>{
    var d = req.body;
    var sql = ` UPDATE career_services SET 
                career_service_logo = '${d.career_service_logo}' , 
                career_service_details = '${d.career_service_details}'
                service_icon = '${d.service_icon}',
                service_title = '${d.service_title}'
                WHERE career_services_id = '${d.career_services_id}'`;
    var data = await exe(sql)
    res.redirect("/admin/career_services");
})

router.get('/company', async (req, res) => {
    var compnay_data = await exe('SELECT * FROM company');
    res.render('admin/company.ejs',{"compnay_data":compnay_data});
})

router.get('/companyapi', async (req, res) => {
    var compnay_data = await exe('SELECT * FROM company');
    res.send(compnay_data)
})

// CREATE TABLE company (company_id INT PRIMARY KEY AUTO_INCREMENT,company_images VARCHAR(300));

router.post('/save_company', async (req, res) => {
    var d = req.files;
    var company_images = new Date().getTime() + req.files.company_images.name;
    req.files.company_images.mv("public/uploads/"+company_images)
    var sql = `INSERT INTO company (company_images) VALUES ('${company_images}')`;
    var data = await exe(sql)
    res.redirect('/admin/company');
});


router.get('/edit_company/:id', async (req,res)=> {
    var sql = `SELECT * FROM company WHERE company_id = '${req.params.id}'`;
    var company_edit_data = await exe(sql)
    res.render('admin/edit_company.ejs',{"company_edit_data":company_edit_data[0]})
});

router.post('/update_company', async (req,res)=> {
    // if(res.files)
    // {
        var d = req.body;
        var company_images = new Date().getTime() + req.files.company_images.name;
        req.files.company_images.mv("public/uploads/"+company_images)
        var sql = `UPDATE company SET company_images = '${company_images}' WHERE company_id = '${d.company_id}'`;
        var data = await exe(sql);
        res.redirect("/admin/company");
    // }
});



router.get('/delete_company/:id', async (req, res) => {
    var sql = `DELETE FROM company WHERE company_id = '${req.params.id}'`;
    var data = await exe(sql);
    res.redirect("/admin/company");
});



// ------------------------------------------------------


router.post('/contact1',async (req, res) => {
    var d = req.body;
    var sql = `INSERT INTO contact (name, email, subject, message) 
    VALUES ('${d.name}', '${d.email}', '${d.subject}', '${d.message}')`;
    var data = await exe(sql);
    res.send(data);
});

router.get('/contact', async (req, res) => {
    var sql = `SELECT * FROM contact`
    var contact_data = await exe(sql);
    res.render('admin/contact.ejs',{"contact_data":contact_data})
})


// CREATE TABLE contact (contact_id INT PRIMARY KEY AUTO_INCREMENT ,name VARCHAR(100),email VARCHAR(100),subject VARCHAR(150),message VARCHAR(500))


router.get('/delete_contact/:id', async (req, res) => {
    var sql = `DELETE FROM contact  where contact_id = '${req.params.id}'`;
    var data = await exe(sql);
    res.redirect('/admin/contact')
})


router.get('/unlockpage', async (req, res) => {
    var sql = `SELECT * FROM service_unlock`;
    var unlock_edit_data = await exe(sql);
    res.render('admin/unlockpage.ejs',{"unlock_edit_data":unlock_edit_data[0]});
})

// CREATE TABLE service_unlock (service_unlock_id INT PRIMARY KEY AUTO_INCREMENT, unlock_heading VARCHAR(200),unlock_images VARCHAR(200))

router.post('/save_unloack', async (req, res) => {
    var d = req.body;
    var unlock_images = new Date().getTime() + req.files.unlock_images.name;
    req.files.unlock_images.mv("public/uploads/"+unlock_images)
    var sql = `INSERT INTO service_unlock (unlock_heading,unlock_images) 
    VALUES ('${d.unlock_heading}','${unlock_images}')`;
    var data = await exe(sql);
    res.redirect('/admin/unlockpage')
})

// router.post('/edit_unloack', async (req, res) => {
//     if(req.files)
//         {
//             var d = req.body;
//             var unlock_images = new Date().getTime() + req.files.unlock_images.name;
//             req.files.unlock_images.mv("public/uploads/"+unlock_images)
//             var sql = `UPDATE service_unlock SET unlock_images = '${unlock_images}' WHERE service_unlock_id = '${d.service_unlock_id}'`;
//             var data = await exe(sql);
//             res.send(data);
//         }
//         var d = req.body;
//         var sql = `UPDATE service_unlock SET unlock_heading = '${d.unlock_heading}' WHERE service_unlock_id = '${d.service_unlock_id}'`;
//         var data = await exe(sql);
//         res.redirect("/admin/unlockpage");
// });


router.get('/app_servicepage', async (req, res) => {
    var sql = `SELECT * FROM service_app`;
    var app_service_data = await exe(sql);
    res.render("admin/app_servicepage.ejs",{"app_service_data":app_service_data[0]});
});

// CREATE TABLE service_app (service_app_id INT PRIMARY KEY AUTO_INCREMENT, app_heading VARCHAR(200),app_images VARCHAR(200))

// router.post("/save_app_service_page", async (req, res) => {
//     var d = req.body;
//     var app_images = new Date().getTime() + req.files.app_images.name;
//     req.files.app_images.mv("public/uploads/"+app_images)
//     var sql = `INSERT INTO service_app (app_heading,app_images) 
//     VALUES ('${d.app_heading}','${app_images}')`;
//     var data = await exe(sql);
//     res.redirect('/admin/app_servicepage')
// });


router.post("/edit_app_service_page", async (req, res) => {
    if(req.files)
        {
            var d = req.body;
            var app_images = new Date().getTime() + req.files.app_images.name;
            req.files.app_images.mv("public/uploads/"+app_images)
            var sql = `UPDATE service_app SET app_images = '${app_images}' WHERE service_app_id = '${d.service_app_id}'`;
            var data = await exe(sql);
            res.send(data);
        }
        var d = req.body;
        var sql = `UPDATE service_app SET app_heading = '${d.app_heading}' WHERE service_app_id = '${d.service_app_id}'`;
        var data = await exe(sql);
        res.redirect("/admin/app_servicepage");
});


router.get('/landmak_servicepage', async (req, res) => {
    var sql = `SELECT * FROM service_landmark `;
    var service_landmark_data = await exe(sql);
    res.render('admin/landmak_servicepage.ejs',{"service_landmark_data":service_landmark_data});
});

// CREATE TABLE service_landmark (service_landmark_id INT PRIMARY KEY AUTO_INCREMENT, service_landmark_heading VARCHAR(100),service_landmark_title VARCHAR(100), service_landmark_details VARCHAR(400));

router.post('/save_landmark_service', async (req, res) => {
    var d = req.body;
    var sql = `INSERT INTO service_landmark (service_landmark_heading,service_landmark_title,service_landmark_details)
    VALUES ('${d.service_landmark_heading}', '${d.service_landmark_title}' , '${d.service_landmark_details}' )`;
    var data = await exe(sql);
    res.redirect('/admin/landmak_servicepage')
});

router.get("/delete_service_landmark/:id",  async (req, res) => {
    var sql = `DELETE FROM  service_landmark WHERE service_landmark_id = '${req.params.id}' `;
    var data = await exe(sql);
    res.redirect('/admin/landmak_servicepage');
});

router.get('/edit_service_landmark/:id', async (req, res) => {
    var sql = `SELECT * FROM  service_landmark WHERE service_landmark_id = '${req.params.id}' `;
    var edit_service_landmark_data = await exe(sql);
    res.render("admin/edit_service_landmark.ejs",{"edit_service_landmark_data":edit_service_landmark_data[0]});
});

router.post('/update_landmark_service', async (req, res) => {
    var d = req.body;
    var sql = `UPDATE service_landmark SET 
    service_landmark_heading = '${d.service_landmark_heading}' ,  
    service_landmark_title = '${d.service_landmark_title}' , 
    service_landmark_details = '${d.service_landmark_details}' WHERE service_landmark_id = '${d.service_landmark_id}'`;
    var data = await exe(sql);
    res.redirect('/admin/landmak_servicepage');
}); 


router.get('/explore_servicepage', async (req, res) => {
    var sql = `SELECT * FROM  service_explore`;
    var expore_data = await exe(sql);
    res.render('admin/explore_servicepage.ejs',{"expore_data":expore_data})
});

// CREATE TABLE service_explore(service_explore_id INT PRIMARY KEY AUTO_INCREMENT, exppre_service_logo VARCHAR(200),exppre_service_details VARCHAR(200));

router.post('/save_explore_service', async (req, res) => {
    var d = req.body;
    var sql = `INSERT INTO service_explore (exppre_service_logo,exppre_service_details)
    VALUES ('${d.exppre_service_logo}', '${d.exppre_service_details}')`;
    var data = await exe(sql);
    res.redirect('/admin/explore_servicepage');
});

router.get('/delete_explore_service/:id', async (req, res) => {
    var sql = `DELETE FROM service_explore WHERE service_explore_id = '${req.params.id}'`;
    var data = await exe(sql);
    res.redirect('/admin/explore_servicepage');
});

router.get('/edit_explore_service/:id', async (req, res) => {
    var sql = `SELECT * FROM service_explore WHERE service_explore_id = '${req.params.id}'`;
    var expore_edit_data = await exe(sql);
    res.render('admin/edit_explore_service.ejs',{"expore_edit_data":expore_edit_data[0]});
});

router.post('/update_explore_service', async (req,res) => {
    
    var d = req.body;
    var sql = ` UPDATE service_explore SET 
                exppre_service_logo = '${d.exppre_service_logo}' , 
                exppre_service_details = '${d.exppre_service_details}'
                WHERE service_explore_id = '${d.service_explore_id}'`;
    var data = await exe(sql)
    res.redirect('/admin/explore_servicepage');

});

//Contact US started
//CREATE TABLE contactus(contactus_id INT PRIMARY KEY AUTO_INCREMENT,contactus_icon TEXT,contactus_title TEXT,contactus_sub TEXT);
router.get("/contactus_part", async function(req,res){
    var contactus_list = await exe(`SELECT * FROM contactus`);
    var obj = {"contactus_list":contactus_list};
    res.render("admin/contactus_part.ejs",obj);
});
router.post("/save_contactus",async function(req,res){
    var d =req.body;
    var sql = `INSERT INTO contactus(contactus_icon ,contactus_title ,contactus_sub ) VALUES ('${d.contactus_icon}','${d.contactus_title}','${d.contactus_sub}')`;
    var result = await exe(sql);
    res.redirect("/admin/contactus_part");
});
router.get("/edit_contactus/:id",async function(req,res){
    var contactus_info = await exe(`SELECT * FROM contactus WHERE contactus_id = '${req.params.id}'`);
    var obj = {"contactus_info":contactus_info};
    res.render("admin/edit_contactus_part.ejs",obj);
});
router.post("/update_contactus",async function(req,res){
    var d = req.body;
    var sql = `UPDATE contactus SET contactus_icon = '${d.contactus_icon}',contactus_title = '${d.contactus_title}', contactus_sub =  '${d.contactus_sub}' WHERE contactus_id = '${d.contactus_id}' `;
    var result = await exe(sql);
    res.redirect("/admin/contactus_part");
});
router.get("/delete_contactus/:id",async function(req,res){
    var sql = `DELETE FROM contactus WHERE contactus_id = '${req.params.id}'`;
    var result = await exe(sql);
    res.redirect("/admin/contactus_part");
});

router.get('/contactus_api',async function(req,res){
    var Contactus = await exe(`SELECT * FROM contactus`);
    res.send(Contactus);
});
//Contact US end
//Company Info Started
//CREATE TABLE company_info(company_info_id INT PRIMARY KEY AUTO_INCREMENT, menu_button1 TEXT,menu_button2 TEXT,footer_description TEXT,footer_address TEXT,footer_phone TEXT,footer_email TEXT,footer_map TEXT, logo1 TEXT,logo2 TEXT);

router.get("/manage_company_info",async function(req,res){
    var company_info_list = await exe(`SELECT * FROM company_info`);
    var obj = {"company_info_list":company_info_list};
    res.render("admin/manage_company_info.ejs",obj);
});
router.post("/save_company_info",async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.logo1.mv("public/company_info/"+file_name);

    var file_name1 = new Date().getTime()+".png";
    req.files.logo2.mv("public/company_info/"+file_name1);
    var sql = `INSERT INTO company_info(menu_button1,menu_button2,footer_description,footer_address,footer_phone,footer_email,footer_map,logo1
        ,logo2) VALUES('${d.menu_button1}','${d.menu_button2}','${d.footer_description}','${d.footer_address}','${d.footer_phone}','${d.footer_email}','${d.footer_map}','${file_name}','${file_name1}')`;
        var result = await exe(sql);
        res.redirect("/admin/manage_company_info");
});
router.get("/edit_company_info/:id",async function(req,res){
    var company_info = await exe(`SELECT * FROM company_info WHERE company_info_id = '${req.params.id}'`);
    var obj = {"company_info":company_info};
    res.render("admin/edit_company_info.ejs",obj);
    // res.send(req.body);
});
router.post("/update_company_info",async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.logo1.mv("public/company_info/"+file_name);
    var file_name1 = new Date().getTime()+".png";
    req.files.logo2.mv("public/company_info/"+file_name1);
    var sql = `UPDATE company_info SET menu_button1 = '${d.menu_button1}',menu_button2 = '${d.menu_button2}',footer_description = '${d.footer_description}',footer_address = '${d
        .footer_address}',footer_phone = '${d.footer_phone}',footer_email = '${d.footer_email}',footer_map = '${d.footer_map}',logo1 = '${file_name}',logo2 = '${file_name1}' WHERE company_info_id = '${d.company_info_id}'`;
        var result = await exe(sql);
        res.redirect("/admin/manage_company_info");
});
router.get("/delete_company_info/:id",async function(req,res){
    var sql = `DELETE FROM company_info WHERE company_info_id = '${req.params.id}'`;
    var result = await exe(sql);
    res.redirect("/admin/manage_company_info");
});
router.get('/company_info_api',async function(req,res){
    var company_info = await exe(`SELECT * FROM company_info`);
    res.send(company_info);
})
//Company Info Ended

module.exports = router;