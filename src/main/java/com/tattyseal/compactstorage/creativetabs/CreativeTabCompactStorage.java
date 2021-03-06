package com.tattyseal.compactstorage.creativetabs;

import net.minecraft.creativetab.CreativeTabs;
import net.minecraft.init.Blocks;
import net.minecraft.item.ItemStack;

import javax.annotation.Nonnull;

/**
 * Created by Toby on 07/11/2014.
 */
public class CreativeTabCompactStorage extends CreativeTabs
{
    public CreativeTabCompactStorage()
    {
        super(getNextID(), "compactStorage");
    }

    @Override
    @Nonnull
    public ItemStack getTabIconItem()
    {
        return new ItemStack(Blocks.CHEST, 1, 0);
    }
}
