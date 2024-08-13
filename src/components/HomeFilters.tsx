'use client'
import React from 'react'
import { HomePageFilters } from '../../constants/Filters'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion';

const HomeFilters = () => {
    const searchParams = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState('');

  const handleTypeClick = (item: string) => {
      if(active === item) {
        setActive("");

        router.push('/', { scroll: false });
      } else {
        setActive(item);

        router.push(`/?filter=${item.toLowerCase()}`, { scroll: false });
      }
    }
  return (
     <motion.div 
      className="mt-10 hidden flex-wrap gap-3 md:flex"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    {HomePageFilters.map((item) => (
      <motion.div
        key={item.value}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button key={item.value} onClick={() => handleTypeClick(item.value)}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === item.value 
          ? 'dark:hover:bg-dark-400 bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500' 
          : 'bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300'
        }`}
      >
        {item.name}
      </Button>
      </motion.div>
    ))}
  </motion.div>
  )
}

export default HomeFilters