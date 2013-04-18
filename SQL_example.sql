drop database if exists Activity_4_1 ;
create database if Not exists Activity_4_1;
use Activity_4_1;

## First, the table definitions.  Note that they must be defined in
## this order, because of the references.
####################################################################
create table candy (
   candy_id INT NOT NULL primary key auto_increment,
   name VARCHAR(40) not null,
   price DEC(5,2),
   calories SMALLINT
) engine=InnoDB;

create table vegetables (
   veg_id INT NOT NULL primary key auto_increment,
   name VARCHAR(40) not null
) engine=InnoDB;

create table temp_candy (
   candy_id INT NOT NULL primary key auto_increment,
   name VARCHAR(40) not null,
   price DEC(5,2),
   calories SMALLINT
) engine=InnoDB;

## Now we insert some row data. You will do more later...

INSERT INTO candy
	(name, price, calories)
   VALUES
	("Payday", .79, 120),
	("Snickers", .79, 150),
	("Milky Way", .74, 150),
	("M&Ms", .99, 150);

INSERT INTO vegetables
	(name)
   VALUES
	("Asparagus");

INSERT INTO temp_candy
	(name, price, calories)
   VALUES
	("Smarties", .49, 60);

#######  DO NOT CHANGE THE CODE ABOVE. ###########
#######  START YOUR CODE BELOW... ###########

## 1. Show databases, tables, columns from all tables and records from all tables.
show databases;
show tables;
show columns from candy;
show columns from vegetables;
show columns from temp_candy;
select * from candy;
select * from vegetables;
select * from temp_candy;

## 2. Delete all the records from the temp_candy table: 

delete from temp_candy;

## 3. Add a description column to the candy table: 

alter table candy
	add column description text;

## 4. Add 7 records of your choice to the candy table. Be original and creative with all values for a higher grade: 

INSERT INTO candy
	(name, price, calories)
   VALUES
	("Raisinettes", 1.79, 160),
	("Gummiworms", 0.99, 250),
	("MikeAndIkes", 1.29, 195),
	("Rolo", 3.28, 1250),
	("SweetTarts", .89, 162),
	("Goobers", 1.49, 137),
	("AlmondJoy", 1.48, 143);

## 5. Use INSERT...SELECT to copy all candy records to the temp_candy table:

insert into temp_candy (name, price, calories)
	select name, price, calories from candy;

## 6. From the temp_candy table, delete the candy whose id is 5: 

delete from temp_candy
	where candy_id = 5;

## 7. Get rid of the entire vegetables table:

drop table vegetables;

## 8. In one statement, delete only the first 2 records with 150 calories from the original candy table:

delete from candy
	where calories = 150
	limit 2;
	

## 9. Show tables and records from all tables again.
show databases;
show tables;
show columns from candy;
show columns from temp_candy;
select * from candy;
select * from temp_candy;

