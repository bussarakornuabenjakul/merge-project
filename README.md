โปรเจกต์ TypeScript สำหรับรวม Array 3 ชุดที่เรียงลำดับมาแล้ว ให้กลายเป็น Array เดียวที่เรียงจาก **น้อยไปมาก** โดยไม่ใช้ฟังก์ชัน .sort()

 การติดตั้งและใช้งาน (Quick Start)

1. ติดตั้ง Dependencies
   npm install

2. รันตัวอย่างการทำงาน (Example):
   npx tsx src/example.ts
   
3. รัน Unit Test (Jest)
   npm test

โครงสร้างโปรเจกต์
src/merge.ts: ฟังก์ชันหลัก

src/example.ts: ไฟล์สาธิตการใช้งานในกรณีต่างๆ

test/merge.test.ts: ชุดทดสอบความถูกต้องของ Logic

package.json: ไฟล์จัดการ Library และ Scripts 

ข้อมูลทางเทคนิค
ฟังก์ชันถูกออกแบบมาให้รองรับ collection_1 (Max to Min), collection_2 (Min to Max) และ collection_3 (Min to Max) โดยใช้การเปรียบเทียบค่าที่น้อยที่สุดจากทั้ง 3 แหล่งพร้อมกัน เพื่อประสิทธิภาพสูงสุด
